//models
const EMP_USER = require('../../models/empUserModel')
const PAYROLL = require("../../models/payRollModel");
const ATTENDANCE = require("../../models/attendanceModel");
const REQUEST = require("../../models/requestModel.");

const empInfoApi = async (req, res) => {
  const { data } = req.body;

  if (data) {
    
    try {
      const profile = await EMP_USER.find({ _id: data });
      
      res.status(200).json(profile);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const payRollApi = async (req, res) => {

  const { data} = req.body;
   
  if (data) {
    try {
      const payroll = await PAYROLL.find({ emp_id: data });
      
      res.status(200).json(payroll);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};




const attendanceApi = async (req, res) => {
  const { data} = req.body;

  if (data) {
    try {
      const attendance = await ATTENDANCE.find({ emp_id: data  });
      res.status(200).json(attendance);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const addRequest = async (req, res) => {

  const { data} = req.body;
  const hr_id=''
  const reqStatus = 'pending'
  if(data){
    try {
      const addReq = await REQUEST.request(data.emp_id,hr_id,data.type,data.details,reqStatus)
      res.status(200).json('request added');
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
    
  }
  

};



const requestApi = async (req, res) => {

  const { data} = req.body;
  
  if (data) {
    
    try {
      const request = await REQUEST.find({ Emp_id: data  });
      
      res.status(200).json(request);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

};



module.exports = {
  
  
  payRollApi,
  attendanceApi,
  requestApi,
  empInfoApi,
  addRequest,
  
};
