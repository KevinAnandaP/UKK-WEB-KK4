import People from "../models/peoplemodel.js";

export const getPeoples = async(req, res) =>{
    try {
        const response = await People.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPeopleById = async(req, res) =>{
    try {
        const response = await People.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPeople = async(req, res) =>{
    try {
        await People.create(req.body);
        res.status(201).json({msg: "People Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePeople = async(req, res) =>{
    try {
        await People.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "People Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePeople = async(req, res) =>{
    try {
        await People.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "People Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}