package kosmo80.mvc.sp4;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

public class EmpController extends MultiActionController {
	Logger logger = Logger.getLogger(EmpController.class);

	private EmpLogic empLogic = null;

	public void setEmpLogic(EmpLogic empLogic) {
		this.empLogic = empLogic;
	}

	public ModelAndView getEmpList(HttpServletRequest req, HttpServletResponse res) {
		ModelAndView mav = new ModelAndView();
		/*
		 * <property name="prefix" value="/WEB-INF/views/"/> <property name="suffix"
		 * value=".jsp"/> /WEB-INF/views/getEmpList.jsp
		 */
		List<Map<String, Object>> empList = empLogic.getEmpList();

//			NPE가 안 일어남.

		// ModelAndView는 scope속성이 request이다.
		mav.addObject("empList", empList);
		mav.setViewName("di/getEmpList");
		return mav;
		// return "redirect:getEmpList.jsp";
	}

}
