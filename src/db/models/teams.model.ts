import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

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

class Sprint implements ISprint {
  @Prop({ required: true, trim: true })
  id: number;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true, trim: true })
  description: string;

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

  @ApiProperty({ required: false })
  @Prop({ type: () => Sprint })
  currentSprint: Sprint;

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
