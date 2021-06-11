package com.erp;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import com.google.gson.Gson;

public class NexaController implements Controller {
	String requestName = null;
//	EmpLogic empLogic = null;
	Logger logger = Logger.getLogger(NexaController.class);
	
	public NexaController(String requestName) {
		logger.info("EmpController 생성 성공");
		this.requestName=requestName;
//		empLogic = new EmpLogic();

	}

	@Override
	public ModelAndView process(String cud, HttpServletRequest req, HttpServletResponse res)
			throws ServletException, IOException {
		return null;
	}

	@Override
	public String process(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		////////뭔가 적어야함
		return null;
	}

}
