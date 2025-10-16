


import type { Response, Request } from "express";
import { ProfileModel } from "../model/profile.model.js";
import axios from "axios";


 export const profile = async (req: Request, res: Response) => {
    try {
        const user = await ProfileModel.findOne().select('-__v -_id').exec(); // Fetch all profiles from the database
        if (!user) {
            return res.status(404).json({ message: "No profile found" });
        }

        const factUrl = process.env.FACT_URL as string;
        const timeStamps = new Date().toISOString();// Get current timestamp in ISO format
        
        let fact = null;
        try {
            const factResponse = await axios.get(factUrl);
            fact = factResponse.data.fact;
            console.log(fact);
        } catch (error) {
            console.error('Error fetching data from GitHub API:', error);
        }
        res.status(200).json({ 
            status: "success",
            user: user,
            timeStamps,
            fact
        }); // Send fact data as a JSON response
    } catch (error) {
        res.status(500).json({ message: "Server error", error }); // Handle any errors
    }  
};

export const createProfile = async (req: Request, res: Response) => {
    try {
        const { email, name, stack } = req.body;
        const newProfile = new ProfileModel({ email, name, stack });
        await newProfile.save();
        res.status(201).json({ message: "Profile created successfully", profile: newProfile });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};