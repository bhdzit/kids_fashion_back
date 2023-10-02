
import { ApiException } from "src/core/api/exceptions/api.exception";
import {Between, Equal, IsNull, LessThan, LessThanOrEqual, Like, MoreThan, MoreThanOrEqual, Not, In} from "typeorm";


export interface QueryRequestFilter {
    relations?: string[];
    where?: { [key: string]: any };
    select?: string[];
}

export interface QueryRequestOptions {
    relationships?: string[];
    whereFields?: string[];
    fields?: string[];
}

class T {

    private static readonly queryParamsKeys = {
        relationships: "rs",
        whereFields: "wh",
        fields: "f"
    };


    private static readonly whereFunctions = {
        "=": {operator: Equal},
        "!=": {operator: Not},
        "like": {
            operator: Like, formatter: (val) => `%${val}%`
        },
        ">": {operator: MoreThan},
        ">=": {operator: MoreThanOrEqual},
        "<": {operator: LessThan},
        "<=": {operator: LessThanOrEqual},
        "bet": {operator: Between, formatter: (val) => val.split("_")},
        "in": {
            operator: In, formatter: (val) =>
                val.split('_')
        },
        "is_null": {operator: IsNull}
    };

    private static readonly errorMsg = {
        NoReqParam: "El parámetro '@Req()' no se está recibiendo " +
            "en el método solicitado"
    };

    private static queryParam: object;

    private static queryOptions: QueryRequestOptions;

    public static QueryRequest(options: QueryRequestOptions) {

        return function (target: any,
                         propertyKey: string | symbol,
                         descriptor: PropertyDescriptor) {

            const originalMethod = descriptor.value;

            descriptor.value = async function (...args: any[]) {

                T.queryOptions = options;

                if (!T.validateArgsHasRequest(args)) {
                    throw new ApiException(T.errorMsg.NoReqParam);
                }

                const queryObj = T.getObjectParams();
                // console.log(queryObj);
                args.push(queryObj as QueryRequestFilter);

                return originalMethod.apply(this, args);
            };

            return descriptor;
        };
    }

    private static getQueryWhere(): { [key: string]: any } {
        let param = T.queryParam[T.queryParamsKeys.whereFields];
        if (!param) {
            return [];
        }

        let where = param.split("|").map(
            group => group.split(",")
        );

        where = where.filter(group => {
            const param = group[0];
            if (!(T.queryOptions?.whereFields ?? []).includes(param)) {
                return false;
            }
            const funcObj = T.whereFunctions[group[1]];
            if (!funcObj) {
                return false;
            }

            const valSanitized = T.sanitizeInput(group[2]);
            const valToOperator = funcObj.formatter
                ? funcObj.formatter(valSanitized)
                : valSanitized;
            if (Array.isArray(valToOperator)) {
                if (group[1] != 'in') {
                    group[1] = funcObj.operator(
                        ...valToOperator
                    );
                } else {
                    group[1] = funcObj.operator(valToOperator);
                }
            } else {
                group[1] = funcObj.operator(valToOperator);
            }

            group.splice(2, 1);
            return true;
        });

        return where.reduce((whr, [field, value]) => {
            whr[field] = value;
            return whr;
        }, {});

    }

    private static getQueryRelationships(): string[] {
        let param = T.queryParam[T.queryParamsKeys.relationships];
        if (!param) {
            return [];
        }

        let relations = param.split(",");

        relations.forEach((relation, key) => {
            if (!(T.queryOptions?.relationships ?? []).includes(relation)) {
                relations.splice(key, 1);
            }
        });

        return relations;
    }

    private static getQueryFields(): string[] {
        let param = T.queryParam[T.queryParamsKeys.fields];
        if (!param) {
            return [];
        }

        let fields = param.split(",");

        fields.forEach((field, key) => {
            if (!(T.queryOptions?.fields ?? []).includes(field)) {
                fields.splice(key, 1);
            }
        });

        return fields;
    }

    private static getObjectParams(): QueryRequestFilter {
        return {
            where: T.getQueryWhere(),
            select: T.getQueryFields(),
            relations: T.getQueryRelationships()
        };
    }

    private static validateArgsHasRequest(args: any[]): boolean {
        const qp = args.find(arg => {
            return typeof arg === "object" && arg.hasOwnProperty("query");
        });
        if (qp) {
            T.queryParam = qp.query;
        }
        return <boolean>qp;
    }

    private static sanitizeInput(inputString: string): string {
        const regex = /\b(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|TRUNCATE|GRANT|REVOKE)\b|\b(OR|AND)\b|;/gi;
        const sanitizedString = inputString.replace(regex, "");
        return sanitizedString.replace(/[\0\n\r\b\t\\'"\x1a]/g, (char) => {
            switch (char) {
                case "\0":
                    return "\\0";
                case "\n":
                    return "\\n";
                case "\r":
                    return "\\r";
                case "\b":
                    return "\\b";
                case "\t":
                    return "\\t";
                case "\x1a":
                    return "\\Z";
                default:
                    return "\\" + char;
            }
        });
    }
}


export const QueryRequest = T.QueryRequest;