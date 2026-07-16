import mongoose, { Schema, Document } from 'mongoose';

export interface IInscription extends Document {
  fullName: string;
  whatsapp: string;
  formation: string;
  contacted: boolean;
  createdAt: Date;
}

const InscriptionSchema = new Schema<IInscription>(
  {
    fullName: { type: String, required: true, trim: true },
    whatsapp: { type: String, required: true, trim: true },
    formation: { type: String, required: true, trim: true },
    contacted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Inscription =
  mongoose.models.Inscription ||
  mongoose.model<IInscription>('Inscription', InscriptionSchema);
