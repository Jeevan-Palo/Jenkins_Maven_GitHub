package com.palo.techtest.StepDefinition;

import com.palo.techtest.StepLibrary.ContactDetailsLibrary;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactDetailsSteps {

	@When("^user navigates to \"([^\"]*)\" screen$")
	public void user_navigates_to_screen(String sectionName) throws Throwable {
		ContactDetailsLibrary.click_Section(sectionName);
	}

	@Then("^user verifies the text \"([^\"]*)\"$")
	public void user_verifies_the_text(String headerText) throws Throwable {
		ContactDetailsLibrary.verifiesHeaderText(headerText);
	}

	@And("^user should verifies the following fields Name,Job Title,Contact No,Email,Alternate Contact Person's Email,Mailing Address are available in Contact Detail page$")
	public void user_should_verifies_the_following_fields_Name_Job_Title_Contact_No_Email_Alternate_Contact_Person_s_Email_Mailing_Address_are_available_in_Contact_Detail_page()
			throws Throwable {
		ContactDetailsLibrary.verifyFields();
	}

	@When("^user clicks on checkbox for the field Same as registered address in Company Profile$")
	public void user_clicks_on_checkbox_for_the_field_Same_as_registered_address_in_Company_Profile() throws Throwable {
		ContactDetailsLibrary.clickOnCheckBox();
	}

	@When("^user should able to enter the postal code \"([^\"]*)\"in mailing address$")
	public void user_should_able_to_enter_the_postal_code_in_mailing_address(String postalCode) throws Throwable {
		 ContactDetailsLibrary.enterPostalCode(postalCode);
	}
	
	@Then("^user validates the postal code \"([^\"]*)\" , Level \"([^\"]*)\" , and Unit \"([^\"]*)\"$")
	public void user_validates_the_postal_code_Level_and_Unit(String postalCode, String level, String unit) throws Throwable {
	    ContactDetailsLibrary.validateAutopopulateAddress(postalCode,level,unit);
	}

	@Then("^user verifies Blk/Hse No \"([^\"]*)\" and Street \"([^\"]*)\" should autopopulate$")
	public void user_verifies_Blk_Hse_No_and_Street_should_autopopulate(String houseNo, String Street) throws Throwable {
	    ContactDetailsLibrary.verifyAutoPopulatedValues(houseNo,Street);
	}

	@Then("^user should verfies the following fields Name, Job Title, Email$")
	public void user_should_verfies_the_following_fields_Name_Job_Title_Email() throws Throwable {
		ContactDetailsLibrary.verifyOfficeAddressFiels();
	}


	@When("^user should able to enter the values in the field \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_should_able_to_enter_the_values_in_the_field(String arg1, String arg2, String arg3, String arg4) throws Throwable {
	    ContactDetailsLibrary.enterValues_MCPField(arg1,arg2,arg3,arg4);
	}
	
	@When("^user clicks for the field of same as main contact person$")
	public void user_clicks_for_the_field_of_same_as_main_contact_person() throws Throwable {
		ContactDetailsLibrary.clickOn_LOA_CheckBox();
	}
	
	@Then("^verifies the value populate in subsection of the Letter of office Addrssee \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void verifies_the_value_populate_in_subsection_of_the_Letter_of_office_Addrssee(String arg1, String arg2, String arg3) throws Throwable {
	    ContactDetailsLibrary.validate_AutopopulateValues_LOA(arg1,arg2,arg3);
	}



}
