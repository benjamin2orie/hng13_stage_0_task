import { prop, getModelForClass } from "@typegoose/typegoose";


export class Profile {
    @prop({ required: true})
    public email!: string;
    @prop({ required: true})
    public name!: string;
    @prop()
    public stack!: string;

}


export const ProfileModel = getModelForClass(Profile);
