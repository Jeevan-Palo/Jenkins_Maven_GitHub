package com.palo.techtest.StepLibrary;

import java.util.List;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import com.palo.techtest.Constant.ContactDetailsConst;
import com.palo.techtest.Constant.EligibilitySectionConst;

public class ContactDetailsLibrary extends CommonLibrary {

	public static void pageRefresh() throws InterruptedException {
		pageReloads();
		webDriver.switchTo().alert().accept();
		Thread.sleep(5000);

	}

	public static void clickSaveBtn() throws Exception {
		isElementPresentVerifyClick(EligibilitySectionConst.Eligibility_Save_BTN);
	}

	public static void click_Section(String sectionName) throws InterruptedException {
		Thread.sleep(2000);
		List<WebElement> element = webDriver.findElement(By.className("sidebar-menu")).findElements(By.tagName("a"));
		System.out.println(element);
		for (WebElement e : element) {
			System.out.println(e.getText());
			if (e.getText().equalsIgnoreCase(sectionName))
				e.click();
		}

	}

	public static void verifiesHeaderText(String expected_HeaderText) throws Exception {
		Thread.sleep(2000);
		String actual = getElementText(ContactDetailsConst.HEADERTEXT_LBL);
		Assert.assertEquals(expected_HeaderText, actual);

	}

	public static void verifyFields() throws Exception {
		isElementPresentVerification(ContactDetailsConst.FIELD_NAME_LBL);
		isElementPresentVerification(ContactDetailsConst.FIELD_JOBTITLE_LBL);
		isElementPresentVerification(ContactDetailsConst.FIELD_CONTACTNO_LBL);
		isElementPresentVerification(ContactDetailsConst.FIELD_EMAIL_LBL);
		isElementPresentVerification(ContactDetailsConst.FIELD_SECONDARYEMAIL_LBL);
		isElementPresentVerification(ContactDetailsConst.FIELD_MAILINGADDRESS_LBL);

	}

	public static void enterPostalCode(String postalCode) throws Exception {
		clearAndEnterText(ContactDetailsConst.POSTALCODE_TXT, postalCode);

	}

	public static void verifyAutoPopulatedValues(String houseNo, String street) throws Exception {
		Thread.sleep(2000);
		String house_Value = getElementValue(ContactDetailsConst.HOUSENO_TXT);
		Assert.assertEquals(houseNo, house_Value);
		String Street_Value = getElementValue(ContactDetailsConst.STREET_TXT);
		Assert.assertEquals(street, Street_Value);

	}

	public static void clickOnCheckBox() throws Exception {
		isElementPresentVerifyClick(ContactDetailsConst.MAILADDRESS_CHKBOX);

	}

	public static void validateAutopopulateAddress(String postalCode, String level, String unit) throws Exception {
		Thread.sleep(2000);
		String postalCode_Value = getElementValue(ContactDetailsConst.POSTALCODE_TXT);
		Assert.assertEquals(postalCode, postalCode_Value);
		String level_Value = getElementValue(ContactDetailsConst.LEVEL_TXT);
		Assert.assertEquals(level, level_Value);
		String unit_Value = getElementValue(ContactDetailsConst.UNIT_TXT);
		Assert.assertEquals(unit, unit_Value);

	}

	public static void verifyOfficeAddressFiels() {
		isElementPresentVerification(ContactDetailsConst.OFFICEADDRESS_NAME_LBL);
		isElementPresentVerification(ContactDetailsConst.OFFICEADDRESS_JOBTITILE_LBL);
		isElementPresentVerification(ContactDetailsConst.OFFICEADDRESS_EMAIL_LBL);

	}

	public static void clickOn_LOA_CheckBox() throws Exception {
		isElementPresentVerifyClick(ContactDetailsConst.LOA_CHKBOX);
	}

	public static void enterValues_MCPField(String name, String job_title, String contactNo, String email)
			throws Exception {
		clearAndEnterText(ContactDetailsConst.MCP_NAME_TXTBOX, name);
		clearAndEnterText(ContactDetailsConst.MCP_JOBTITLE_TXTBOX, job_title);
		clearAndEnterText(ContactDetailsConst.MCP_CONTACTNO_TXTBOX, contactNo);
		clearAndEnterText(ContactDetailsConst.MCP_EMAIL_TXTBOX, email);
	}

	public static void validate_AutopopulateValues_LOA(String name, String job_title, String email) throws Exception {
		Thread.sleep(2000);
		String name_Value = getElementValue(ContactDetailsConst.LOA_NAME_TXT);
		Assert.assertEquals(name, name_Value);
		String job_title_Value = getElementValue(ContactDetailsConst.LOA_JOBTITLE_TXT);
		Assert.assertEquals(job_title, job_title_Value);
		String email_Value = getElementValue(ContactDetailsConst.LOA_EMAIL_TXT);
		Assert.assertEquals(email, email_Value);

	}

}
