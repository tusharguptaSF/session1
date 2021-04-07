import {belongsTo, Entity, model, property} from '@loopback/repository';
import {User} from './user.model';

@model({
  settings: {
    foreignKeys: {
      fk_note_userId: {
        name: 'fk_note_userId',
        entity: 'User',
        entityKey: 'id',
        foreignKey: 'userId',
      }
    }
  }
})
export class Note extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  doc?: string;

  @belongsTo(() => User)
  userId: number;

  constructor(data?: Partial<Note>) {
    super(data);
  }
}

export interface NoteRelations {
  // describe navigational properties here
}

export type NoteWithRelations = Note & NoteRelations;
