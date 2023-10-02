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

  public async store(entity: BaseEntity): Promise<BaseEntity> {
    if (!this.repository) {
      this.throwException('RepositoryIsNotDefined');
    }

    return await this.repository.create(entity);
  }

  public async delete(objectId: number | string): Promise<boolean> {
    let deletion: DeleteResult;
    try {
      deletion = await this.repository.delete(objectId);
    } catch (e) {
      console.log(e);
      console.log(deletion);
    }
    return <boolean>!!deletion;
  }

  public async update(id,entity: BaseEntity): Promise<BaseEntity> {
    if (!this.repository) {
      this.throwException('RepositoryIsNotDefined');
    }

    return await this.repository.save(entity);
  }
}
