import type { ObjectSchema as YupSchema } from 'yup';
import type { Schema as JoiSchema } from 'joi';
import type { Struct as SuperstructSchema } from 'superstruct';
import type { StandardSchemaV1 } from '@standard-schema/spec';
export type InferSchemaType<S> = S extends undefined ? Record<string, any> : S extends StandardSchemaV1<infer U> ? U : S extends YupSchema<infer U> ? U : S extends JoiSchema<infer U> ? U : S extends SuperstructSchema<infer U, any> ? U : never;
