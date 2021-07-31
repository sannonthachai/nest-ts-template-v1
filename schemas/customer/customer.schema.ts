import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop()
  citizenID: number;

  @Prop()
  firstNameTH: string;

  @Prop()
  lastNameTH: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
