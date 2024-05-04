//get all contcts
//@route GET /api/contacts
//@access public

const getAllContact = (req,res)=>{
    res.status(200).json({message:"Get all contacts"});  
};


//Get conatct by id
//@route POST /api/contacts/:id
//@access public

const getContact = (req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`})
}
//create contacts
//@route POST /api/contacts
//@access public

const createContact = (req,res)=>{
    res.status(200).json({message:"create contact"});
};

//update contact by id
//@route PUT /api/contacts
//@access public

const updateContact =(req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`})
};

//Delete contact
//@route DELETE /api/contacts
//@access public

const deleteContact = (req,res)=>{
    res.status(200).json({message:`deleted contact for ${req.params.id}`})
};


export  { getContact,getAllContact,updateContact,deleteContact,createContact };