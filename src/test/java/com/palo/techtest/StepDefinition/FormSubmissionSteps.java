package com.palo.techtest.StepDefinition;

import java.util.List;

import com.palo.techtest.StepLibrary.FormSubmissionLibrary;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FormSubmissionSteps {

	@When("^user enter mandatory fields and click next in proposal screen$")
	public void user_enter_mandatory_fields_and_click_next(List<String> EnterValues) throws Throwable {
			FormSubmissionLibrary.enterValues_ProposalScreen(EnterValues);
	}

	@When("^user enter mandatory fields and click next button in Business Impact screen$")
	public void user_enter_mandatory_fields_and_click_next_button_in_Business_Impact_screen(List<String> EnterValues_BI) throws Throwable {
	    	FormSubmissionLibrary.enterValues_BusinessImpactScreen(EnterValues_BI);
	}
	
	@When("^user enter mandatory fields and click next button in Cost screen$")
	public void user_enter_mandatory_fields_and_click_next_button_in_Cost_screen(List<String> EnterValues_Cost) throws Throwable {
			FormSubmissionLibrary.enterValues_CostScreen(EnterValues_Cost);
	}
	
	@When("^user enter mandatory fields and click review button in Declare and Acknowledge screen$")
	public void user_enter_mandatory_fields_and_click_review_button_in_Declare_and_Acknowledge_screen() throws Throwable {
			FormSubmissionLibrary.enterValues_DeclareAckScreen();
	}
	
	
	@Then("^user should verifies the submitted data in Eligibility section$")
	public void user_should_verifies_the_submitted_data_in_Eligibility_section(List<String> eligibility_Values) throws Throwable {
			FormSubmissionLibrary.validateEligibilityValues_Review(eligibility_Values);
	}
	
	@Then("^user should verifies the submitted data in Contact Details section \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_should_verifies_the_submitted_data_in_Contact_Details_section(String arg1, String arg2, String arg3, String arg4) throws Throwable {
	    	FormSubmissionLibrary.validateContactDetailsValues_Review(arg1,arg2,arg3,arg4);
	}
	
	@Then("^user should verifies the submitted data in Proposal screen$")
	public void user_should_verifies_the_submitted_data_in_Proposal_screen(List<String> proposal_Values) throws Throwable {
			FormSubmissionLibrary.validProposalValues(proposal_Values);
	}
	
	@Then("^user should verifies the submitted data in Business Impact screen$")
	public void user_should_verifies_the_submitted_data_in_Business_Impact_screen(List<String> businessImpact_Values) throws Throwable {
	    	FormSubmissionLibrary.validBusinessImpactValues(businessImpact_Values);
	}
	
	@Then("^user should verifies the submitted data in Costs screen$")
	public void user_should_verifies_the_submitted_data_in_Costs_screen(List<String> cost_Values) throws Throwable {
			FormSubmissionLibrary.validCostValues(cost_Values);
	}
	
	@Then("^user should verifies the submitted data in Declare and review screen$")
	public void user_should_verifies_the_submitted_data_in_Declare_and_review_screen(List<String> DANDR_Values) throws Throwable {
			FormSubmissionLibrary.validDeclareAndReviewValues(DANDR_Values);
	}
	
	@And("^user should able to submit My Grant Application$")
	public void user_should_able_to_submit_My_Grant_Application() throws Throwable {
			FormSubmissionLibrary.clickFormSubmitBtn();
	}

	@Then("^user should verify the success message contain \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_should_verify_the_success_message_contain_and(String refID, String agencyDetails) throws Throwable {
	    	FormSubmissionLibrary.verifySuccessMSG(refID,agencyDetails);
	}
	
	@When("^user clicks on \"([^\"]*)\" in Main menu and verifies the submitted application is displayed$")
	public void user_clicks_on_in_Main_menu(String menu_Value) throws Throwable {
			FormSubmissionLibrary.clicksOnMainMenu(menu_Value);
	}

	@When("^user navigates to processing tab$")
	public void user_navigates_to_processing_tab() throws Throwable {
	    	FormSubmissionLibrary.navigateProcessingTab();
	}

	@Then("^user verifies the submitted application is displayed$")
	public void user_verifies_the_submitted_application_is_displayed() throws Throwable {
	    	FormSubmissionLibrary.verifyAndClick_SubmittedApplication();
	}

	@Then("^user should verifies the text \"([^\"]*)\" in read only summary page$")
	public void user_should_verifies_the_text_in_read_only_summary_page(String Review) throws Throwable {
	    	FormSubmissionLibrary.verify_ReviewPage(Review);
	}
	
	@And("^user should verify the error message \"([^\"]*)\" for the missing field$")
	public void user_should_verify_the_error_message_for_the_missing_field(String errorMessage) throws Throwable {
			FormSubmissionLibrary.verifyErrorMsg(errorMessage);
	}
	
	@And("^user should able to logged out successfully$")
	public void user_should_able_to_logged_out_successfully() throws Throwable {
			FormSubmissionLibrary.loggedOut();
	}


}
