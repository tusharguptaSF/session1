import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {User, UserRelations, Note} from '../models';
import {NoteRepository} from './note.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly notes: HasManyRepositoryFactory<Note, typeof User.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('NoteRepository') protected noteRepositoryGetter: Getter<NoteRepository>,
  ) {
    super(User, dataSource);
    this.notes = this.createHasManyRepositoryFactoryFor('notes', noteRepositoryGetter,);
    this.registerInclusionResolver('notes', this.notes.inclusionResolver);
  }
}
