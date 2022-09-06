import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';

export enum TEAM_STATUS {
  NEW = 'new',
  ACTIVE = 'active',
  ON_PAUSE = 'onPause',
  INACTIVE = 'inactive',
}

interface ISprint {
  id: number;
  title: string;
  description: string;
  level: number;
}

export type TeamsDocument = Teams & Document;

class Sprint implements ISprint {
  @ApiProperty({ type: Number })
  @Prop({ required: true, trim: true })
  id: number;

  @ApiProperty({ type: String })
  @Prop({ required: true, trim: true })
  title: string;

  @ApiProperty({ type: String })
  @Prop({ required: true, trim: true })
  description: string;

  @ApiProperty({ type: Number })
  @Prop({ required: true, trim: true })
  level: number;
}

@Schema()
export class Teams {
  @ApiProperty({ type: String })
  @Prop({ required: true, unique: true })
  _id: Types.ObjectId;

  @ApiProperty({ type: String })
  @Prop({ required: true, trim: true })
  title: string;

  @ApiPropertyOptional()
  @Prop({ type: () => Sprint, default: null })
  currentSprint: Sprint | null;

  @ApiProperty({ enum: TEAM_STATUS })
  @Prop({ required: true, enum: TEAM_STATUS })
  status: TEAM_STATUS;

  @ApiProperty({ type: String })
  @Prop({ required: true, default: Date.now() })
  createdAt: Date;

  @ApiProperty({ type: Number })
  @Prop({ required: true })
  participantsCount: number;
}
export const TeamsSchema = SchemaFactory.createForClass(Teams);
