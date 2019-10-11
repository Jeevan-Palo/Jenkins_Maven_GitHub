package com.palo.techtest.Constant;

public class EligibilitySectionConst {

	public static final String LOGIN_BTN = "login-button~ID";
	public static final String USERNAME_TXTBOX = "CPUID~NAME";
	public static final String USERFULLNAME_TXTBOX = "CPUID_FullName~NAME";
	public static final String USERID_TXTBOX = "CPEntID~NAME";
	public static final String USERROLE_DD = "CPRole~NAME";
	public static final String USERLOGIN_BTN = "//*[@action='/saml/acs'][2]//button[@type='submit']~XPATH";
	public static final String NEWGRANT_BTN = "//*[@href='/grants/new']//div[@class='dashboard-action-card']~XPATH";
	public static final String SECTOR_TYPE_BTN = "//*[@class='picker-option']//*[contains(text(), 'IT')]~XPATH";
	public static final String SELECT_GRANT_BTN = "//*[@class='picker-option']//*[contains(text(), 'Bring my business overseas')]";
	public static final String SELECT_GRANTPLAN_BTN = "//*[@class='picker-option']//*[contains(text(), 'Market Readiness Assistance')]";
	public static final String APPLY_BTN = "go-to-grant~ID";
	public static final String PROCEED_BTN = "keyPage-form-button~ID";
	public static final String Eligibility1 = "//*[@class='form-horizontal bgp-radio-group'][1]";
	public static final String ELIGIBILTYQUESTIONFORM = "//*[@class='form-group']~XPATH";
	public static final String RADIOBTN_WARNINGMSG = "//div[@class='eligibility-advice'][1]//span";
	public static final String SMARTLINK = "//a[@href='https://smeportal.sg/content/smeportal/en/moneymatters.html#saText']";
	public static final String Eligibility_Save_BTN = "save-btn~ID";

}
