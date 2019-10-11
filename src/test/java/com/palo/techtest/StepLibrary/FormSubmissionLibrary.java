package com.palo.techtest.StepLibrary;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.stream.Collectors;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import com.palo.techtest.Constant.ContactDetailsConst;
import com.palo.techtest.Constant.EligibilitySectionConst;
import com.palo.techtest.Constant.FormSubmissionConst;
import com.palo.techtest.Constant.UserConfig;

public class FormSubmissionLibrary extends CommonLibrary {

	public static void enterValues_ProposalScreen(List<String> enterValues) throws Exception {
		clearAndEnterText(FormSubmissionConst.PROPOSAL_PROJECTTITLE_TXT_VALUE, enterValues.get(0));
		clearAndEnterText(FormSubmissionConst.PROPOSAL_STARTDATE_VALUE, enterValues.get(1));
		clearAndEnterText(FormSubmissionConst.PROPOSAL_ENDDATE_VALUE, enterValues.get(2));
//		clearAndEnterText(FormSubmissionConst.PROPOSAL_STARTDATE_VALUE, getStartDate(enterValues.get(1)));
//		clearAndEnterText(FormSubmissionConst.PROPOSAL_ENDDATE_VALUE, getEndDate(enterValues.get(2)));
		clearAndEnterText(FormSubmissionConst.PROPOSAL_PROJECTDESC_VALUE, enterValues.get(3));
		isElementPresentVerifyClick(FormSubmissionConst.PROPOSAL_ACTIVITY_DD);
		isElementPresentVerifyClick(FormSubmissionConst.PROPOSAL_ACTIVITY_SELECT_DD);
		isElementPresentVerifyClick(FormSubmissionConst.PROPOSAL_PRIMARYTARGET_DD);
		isElementPresentVerifyClick(FormSubmissionConst.PROPOSAL_PRIMARYTARGET_SELECT_DD);

	}

	public static void enterValues_BusinessImpactScreen(List<String> enterValues_BI) throws Exception {
		clearAndEnterText(FormSubmissionConst.BUSINESSIMPACT_FYENDDATE, enterValues_BI.get(0));
		clearAndEnterText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASSALES, enterValues_BI.get(1));
		clearAndEnterText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASSALES1, enterValues_BI.get(1));
		clearAndEnterText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASSALES2, enterValues_BI.get(1));
		clearAndEnterText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASSALES3, enterValues_BI.get(1));
		clearAndEnterText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASINVESTMENT, enterValues_BI.get(2));
		clearAndEnterText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASINVESTMENT1, enterValues_BI.get(2));
		clearAndEnterText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASINVESTMENT2, enterValues_BI.get(2));
		clearAndEnterText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASINVESTMENT3, enterValues_BI.get(2));
		clearAndEnterText(FormSubmissionConst.BUSINESSIMPACT_PROJECTIONREASON, enterValues_BI.get(3));
		clearAndEnterText(FormSubmissionConst.BUSINESSIMPACT_NONTANGIBLEBENEFITS, enterValues_BI.get(4));
		isElementPresentVerifyClick(EligibilitySectionConst.Eligibility_Save_BTN);
		isElementPresentVerifyClick(FormSubmissionConst.NEXT_BTN);

	}

	public static void enterValues_CostScreen(List<String> enterValues_Cost) throws Exception {
		isElementPresentVerifyClick(FormSubmissionConst.COST_VENDORSADDITEM);
		Thread.sleep(2000);
		isElementPresentVerifyClick(FormSubmissionConst.COST_OVERSEAR_RDB);
		clearAndEnterText(FormSubmissionConst.COST_VENDORNAME, enterValues_Cost.get(0));
		WebElement uploadElement = webDriver.findElement(By.id("react-project_cost-vendors-0-attachments-input"));
//        uploadElement.sendKeys("C:/Users/Jeevan/Desktop/Jeevan/GovTech/BDD_Framework-master/com.palo.techtest/InputData/"+enterValues_Cost.get(1));
		uploadElement.sendKeys(UserConfig.upLoad_location + enterValues_Cost.get(1));

		isElementPresentVerifyClick(FormSubmissionConst.COST_ESTIMATEBILLINGCURRENCY_TXTBOX);
		clearAndEnterText(FormSubmissionConst.COST_ESTIMATEBILLINGCURRENCY_TXTBOX, enterValues_Cost.get(2));
		isElementPresentVerifyClick(EligibilitySectionConst.Eligibility_Save_BTN);
		isElementPresentVerifyClick(FormSubmissionConst.NEXT_BTN);

	}

	public static void enterValues_DeclareAckScreen() throws Exception {
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_QUESTION1);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_QUESTION2);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_QUESTION3);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_QUESTION4);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_QUESTION5);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_QUESTION6);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_QUESTION7);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_CHKBOX);
		isElementPresentVerifyClick(EligibilitySectionConst.Eligibility_Save_BTN);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_REVIEW_BTN);
		Thread.sleep(10000);

	}

	public static void validateEligibilityValues_Review(List<String> eligibility_Values) throws Exception {

		Assert.assertEquals(eligibility_Values.get(0),
				getElementText(FormSubmissionConst.REVIEW_ELIGIBILITY_QUESTION1));
		Assert.assertEquals(eligibility_Values.get(1),
				getElementText(FormSubmissionConst.REVIEW_ELIGIBILITY_QUESTION2));
		Assert.assertEquals(eligibility_Values.get(2),
				getElementText(FormSubmissionConst.REVIEW_ELIGIBILITY_QUESTION3));
		Assert.assertEquals(eligibility_Values.get(3),
				getElementText(FormSubmissionConst.REVIEW_ELIGIBILITY_QUESTION4));

	}

	public static void validateContactDetailsValues_Review(String name, String job_Title, String contact_NO,
			String email) throws Exception {

		Assert.assertEquals(name, getElementText(ContactDetailsConst.MCP_NAME_TXTBOX));
		Assert.assertEquals(job_Title, getElementText(ContactDetailsConst.MCP_JOBTITLE_TXTBOX));
		Assert.assertEquals(contact_NO, getElementText(ContactDetailsConst.MCP_CONTACTNO_TXTBOX));
		Assert.assertEquals(email, getElementText(ContactDetailsConst.MCP_EMAIL_TXTBOX));
		Assert.assertEquals(name, getElementText(ContactDetailsConst.LOA_NAME_TXT));
		Assert.assertEquals(job_Title, getElementText(ContactDetailsConst.LOA_JOBTITLE_TXT));
		Assert.assertEquals(email, getElementText(ContactDetailsConst.LOA_EMAIL_TXT));

	}

	public static void validProposalValues(List<String> proposal_Values) throws Exception {
		Assert.assertEquals(proposal_Values.get(0),
				getElementText(FormSubmissionConst.PROPOSAL_PROJECTTITLE_TXT_VALUE));
		Assert.assertEquals(proposal_Values.get(1), getElementText(FormSubmissionConst.PROPOSAL_STARTDATE_VALUE));
		Assert.assertEquals(proposal_Values.get(2), getElementText(FormSubmissionConst.PROPOSAL_ENDDATE_VALUE));
		Assert.assertEquals(proposal_Values.get(3), getElementText(FormSubmissionConst.PROPOSAL_PROJECTDESC_VALUE));
		Assert.assertEquals(proposal_Values.get(4), getElementText(FormSubmissionConst.PROPOSAL_ACTIVITY_VALUE));
		Assert.assertEquals(proposal_Values.get(5),
				getElementText(FormSubmissionConst.PROPOSAL_PRIMARYTARGETVALUE_VALUE));

	}

	public static void validBusinessImpactValues(List<String> businessImpact_Values) throws Exception {
		Assert.assertEquals(businessImpact_Values.get(0), getElementText(FormSubmissionConst.BUSINESSIMPACT_FYENDDATE));
		Assert.assertEquals(businessImpact_Values.get(1),
				getElementText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASSALES));
		Assert.assertEquals(businessImpact_Values.get(1),
				getElementText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASSALES1));
		Assert.assertEquals(businessImpact_Values.get(1),
				getElementText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASSALES2));
		Assert.assertEquals(businessImpact_Values.get(1),
				getElementText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASSALES3));

		Assert.assertEquals(businessImpact_Values.get(2),
				getElementText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASINVESTMENT));
		Assert.assertEquals(businessImpact_Values.get(2),
				getElementText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASINVESTMENT1));
		Assert.assertEquals(businessImpact_Values.get(2),
				getElementText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASINVESTMENT2));
		Assert.assertEquals(businessImpact_Values.get(2),
				getElementText(FormSubmissionConst.BUSINESSIMPACT_OVERSEASINVESTMENT3));
		Assert.assertEquals(businessImpact_Values.get(3),
				getElementText(FormSubmissionConst.BUSINESSIMPACT_PROJECTIONREASON));
		Assert.assertEquals(businessImpact_Values.get(4),
				getElementText(FormSubmissionConst.BUSINESSIMPACT_NONTANGIBLEBENEFITS));

	}

	public static void validCostValues(List<String> cost_Values) throws Exception {
		Assert.assertEquals("Overseas", getElementText(FormSubmissionConst.COST_VENDORREG_VALUE_LBL));
		Assert.assertEquals(cost_Values.get(0), getElementText(FormSubmissionConst.COST_VENDORNAME));
		Assert.assertEquals(cost_Values.get(1), getElementText(FormSubmissionConst.COST_FILENAME_LBL));
		Assert.assertEquals(cost_Values.get(2),
				getElementText(FormSubmissionConst.COST_ESTIMATEBILLINGCURRENCY_TXTBOX));

	}

	public static void validDeclareAndReviewValues(List<String> dANDR_Values) throws Exception {
		Assert.assertEquals(dANDR_Values.get(0), getElementText(FormSubmissionConst.DANDR_QUESTION1));
		Assert.assertEquals(dANDR_Values.get(1), getElementText(FormSubmissionConst.DANDR_QUESTION2));
		Assert.assertEquals(dANDR_Values.get(2), getElementText(FormSubmissionConst.DANDR_QUESTION3));
		Assert.assertEquals(dANDR_Values.get(3), getElementText(FormSubmissionConst.DANDR_QUESTION4));
		Assert.assertEquals(dANDR_Values.get(4), getElementText(FormSubmissionConst.DANDR_QUESTION5));
		Assert.assertEquals(dANDR_Values.get(5), getElementText(FormSubmissionConst.DANDR_QUESTION6));
		Assert.assertEquals(dANDR_Values.get(6), getElementText(FormSubmissionConst.DANDR_QUESTION7));
		Assert.assertEquals(dANDR_Values.get(7), getElementText(FormSubmissionConst.DANDR_QUESTION8));
		isElementPresentVerification(FormSubmissionConst.DANDR_DECLARATION_CHKBOX);
		isElementPresentVerifyClick(FormSubmissionConst.DANDR_DECLARATION_CHKBOX);
	}

	public static void clickFormSubmitBtn() throws Exception {
		isElementPresentVerifyClick(FormSubmissionConst.REVIEW_SUBMIT_BTN);

	}

	public static void verifySuccessMSG(String refID, String agencyDetails) throws Exception {

		String Actual_RefID_Lbl = getElementText(FormSubmissionConst.SUCCESSMSG_REFID_LBL);
		Assert.assertEquals(refID, Actual_RefID_Lbl);
		String Actual_AgencyDetails = getElementText(FormSubmissionConst.SUCCESSMSG_AGENCYDETAILS);
		assertThat(Actual_AgencyDetails).contains(agencyDetails);

	}

	public static void clicksOnMainMenu(String menu_Value) throws Exception {
		String Actual_SubmittedDate = getElementText(FormSubmissionConst.SUCCESSMSG_SUBMITTEDDATE);
		isElementPresentVerifyClick(FormSubmissionConst.MAINMENU_MYGRANTS);
		Thread.sleep(3000);
		isElementPresentVerifyClick(FormSubmissionConst.HOMEPAGE_PROCESSINGTAB_LNK);
		Thread.sleep(3000);
		WebElement processingTab = webDriver.findElement(By.id("processing"));
		List<WebElement> listdown = processingTab.findElements(By.xpath("//table[@id='db-apps-processing']//td[6]"));
		List<String> listDownValues = listdown.stream().map(e -> e.getText()).collect(Collectors.toList());
		for (String value : listDownValues) {
			System.out.println(value);
			if (value.contains(Actual_SubmittedDate)) {
				Assert.assertEquals(value, Actual_SubmittedDate);
				break;
			}
		}
	}

	public static void navigateProcessingTab() throws Exception {
		isElementPresentVerifyClick(FormSubmissionConst.HOMEPAGE_PROCESSINGTAB_LNK);
		Thread.sleep(3000);
	}

	public static void verifyAndClick_SubmittedApplication() {

	}

	public static void verify_ReviewPage(String review) throws Exception {
		isElementPresentVerification(FormSubmissionConst.REVIEW_HEADER_TXT);
		String actualReviewText = getElementText(FormSubmissionConst.REVIEW_HEADER_TXT);
		Assert.assertEquals(review, actualReviewText);
	}

	public static void verifyErrorMsg(String errorMessage) throws Exception {
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_QUESTION2);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_QUESTION3);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_QUESTION4);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_QUESTION5);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_QUESTION6);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_QUESTION7);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_CHKBOX);
		isElementPresentVerifyClick(FormSubmissionConst.DECLARECHECK_REVIEW_BTN);
		isElementPresentVerification(FormSubmissionConst.FORM_ERRORMSG_TXT);
		String actualError = getElementText(FormSubmissionConst.FORM_ERRORMSG_TXT);
		Assert.assertEquals(errorMessage, actualError);
	}

	public static void loggedOut() throws Exception {
		isElementPresentVerification(FormSubmissionConst.LOGOUT_BTN);
		isElementPresentVerifyClick(FormSubmissionConst.LOGOUT_BTN);
	}

}
