import {
  BaseEntity,
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';

export abstract class BaseRepository {
  protected abstract repository: Repository<BaseEntity>;

  public async query(
    filterOptions: FindManyOptions,
  ): Promise<BaseEntity[] | any[]> {
    if (!this.repository) this.throwException('RepositoryIsNotDefined');

    return await this.repository.find(filterOptions);
  }

  public async findOne(filterOptions: FindOneOptions): Promise<BaseEntity> {
    if (!this.repository) {
      this.throwException('RepositoryIsNotDefined');
    }
    return await this.repository.findOne(filterOptions);
  }

  private throwException(msg: string): void {
    //    throw new ApiException(msg);
  }

  public async store(entity: BaseEntity): Promise<BaseEntity[]> {
    if (!this.repository) {
      this.throwException('RepositoryIsNotDefined');
    }
    await this.repository.save(entity);
    return await this.repository.find();
     
  }

  public async delete(objectId: number | string): Promise<BaseEntity[]> {
    let deletion: DeleteResult;
    try {
      deletion = await this.repository.delete(objectId);
      return await this.repository.find();
    } catch (e) {
      console.log(e);
      console.log(deletion);
    }
    return [];
  }

  public async update(objectId:number,payload: BaseEntity): Promise<BaseEntity> {
    if (!this.repository) {
      this.throwException('RepositoryIsNotDefined');
    }
    let entity =await this.findOne({where:{id:objectId}});
    Object.keys(payload).map(key=>{
      entity[key]=payload[key];
    });
    return await entity.save();
  }
}
