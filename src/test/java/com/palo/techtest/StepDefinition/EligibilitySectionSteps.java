package com.palo.techtest.StepDefinition;

import java.util.List;

import com.palo.techtest.StepLibrary.EligibilitySectionLibrary;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EligibilitySectionSteps {

	@Given("^User login with own \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void User_login_with_own(String UserName, String UserFullName, String UserID, String UserRole)
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		EligibilitySectionLibrary.userLoginDetails(UserName, UserFullName, UserID, UserRole);
	}

	@When("^user creates a new Grant$")
	public void user_creates_a_new_Grant() throws Throwable {
		EligibilitySectionLibrary.createNewGrant();
	}

	@When("^user clicks on Proceed button in My Grant Actions screen$")
	public void user_clicks_on_Proceed_button_in_My_Grant_Actions_screen() throws Throwable {
		EligibilitySectionLibrary.clickProceed();
	}

	@Then("^Eligibility section has \"([^\"]*)\" questions$")
	public void eligibility_section_has_questions(String arg1) throws Throwable {

	}

	@Then("^Question \"([^\"]*)\" is displayed as follows$")
	public void questionIsDisplayedAsFollows(int questionNumber, List<String> question) throws Exception {

		EligibilitySectionLibrary.verifyQuestions(questionNumber, question);
		
	}

	@Then("^Question \"([^\"]*)\" has following radio buttons$")
	public void question_is_following_radio_buttons(int questionNumber, List<String> question) throws Throwable {
		EligibilitySectionLibrary.verifyQuestions(questionNumber, question);
	}
	@When("^user selects the radio button as \"([^\"]*)\" and verified for the question (\\d+)$")
	public void user_selects_the_radio_button_as_and_verified_for_the_question(String radio_Value, int questionNumber) throws Throwable {
		EligibilitySectionLibrary.selectAndVerifyRadioButton(radio_Value,questionNumber);
	}
	
	@Then("^warning message \"([^\"]*)\" is displayed for question (\\d+)$")
	public void warning_message_is_displayed_for_question(String warning_Msg, int questionNumber) throws Throwable {
		EligibilitySectionLibrary.verifyWarningMsg(warning_Msg,questionNumber);
	}
	
    @When("^user clicks on Smart Adviser Link$")
    public void userClicksOnSmartAdviserLink() throws Exception {
    	EligibilitySectionLibrary.clickSmartLink();
  
    }
    
    @Then("^a website is launched in another window with url \"([^\"]*)\"$")
    public void websiteIsLaunchedInAnotherWindow(String expectedUrl) {
       EligibilitySectionLibrary.verifySmartLinkUrl(expectedUrl);
    }
    
    @When("^user clicks on save button$")
    public void user_clicks_on_save_button() throws Throwable {
        EligibilitySectionLibrary.clickSaveBtn();
    }

    @When("^user refreshes the page$")
    public void user_refreshes_the_page() throws Throwable {
        EligibilitySectionLibrary.pageRefresh();
    }

    @Then("^user verify the Eligibility page is reloaded$")
    public void user_reloads_the_Eligibility_page() throws Throwable {
       
    }

    @Then("^\"([^\"]*)\" radio is selected for question \"([^\"]*)\"$")
    public void radio_is_selected_for_question(String radio_value, String questionnumber) throws Throwable {
    	EligibilitySectionLibrary.verifyRadioBtn_AfterRefresh(radio_value,questionnumber);
     
    }


}
