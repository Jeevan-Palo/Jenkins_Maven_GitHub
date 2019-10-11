package com.palo.techtest.StepLibrary;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.palo.techtest.Constant.EligibilitySectionConst;

public class EligibilitySectionLibrary extends CommonLibrary {

	public static void userLoginDetails(String userName, String userFullName, String UserID, String UserRole)
			throws Exception {
		isElementPresentVerifyClick(EligibilitySectionConst.LOGIN_BTN);
		clearAndEnterText(EligibilitySectionConst.USERNAME_TXTBOX, userName);
		clearAndEnterText(EligibilitySectionConst.USERFULLNAME_TXTBOX, userFullName);
		clearAndEnterText(EligibilitySectionConst.USERID_TXTBOX, UserID);
		selectDropDownByValue(EligibilitySectionConst.USERROLE_DD, UserRole);
		isElementPresentVerifyClick(EligibilitySectionConst.USERLOGIN_BTN);

	}

	public static void createNewGrant() throws Exception {
		isElementPresentVerification(EligibilitySectionConst.NEWGRANT_BTN);
		isElementPresentVerifyClick(EligibilitySectionConst.NEWGRANT_BTN);
		isElementPresentVerification(EligibilitySectionConst.SECTOR_TYPE_BTN);
		isElementPresentVerifyClick(EligibilitySectionConst.SECTOR_TYPE_BTN);
		isElementPresentVerification(EligibilitySectionConst.SELECT_GRANT_BTN);
		isElementPresentVerifyClick(EligibilitySectionConst.SELECT_GRANT_BTN);
		isElementPresentVerification(EligibilitySectionConst.SELECT_GRANTPLAN_BTN);
		isElementPresentVerifyClick(EligibilitySectionConst.SELECT_GRANTPLAN_BTN);
		isElementPresentVerification(EligibilitySectionConst.APPLY_BTN);
		isElementPresentVerifyClick(EligibilitySectionConst.APPLY_BTN);

	}

	public static void clickProceed() throws Exception {
		isElementPresentVerifyClick(EligibilitySectionConst.PROCEED_BTN);
	}

	public <T> void contains(final Iterable<T> actual, final T expected) {
		try {
			if (expected instanceof String)
				assertThat(actual).contains(expected);
			else
				assertThat(actual).usingRecursiveFieldByFieldElementComparator().contains(expected);
		} catch (AssertionError e) {
			e.printStackTrace();
		}
	}

	public static void verifyQuestions(int questionNumber, List<String> question) throws Exception {
		String actual = getElementText("//*[@class='form-horizontal bgp-radio-group'][" + questionNumber + "]");
		question.forEach(expected -> {
			assertThat(actual).contains(expected);
		});

		System.out.println(actual);

	}

	public static void selectAndVerifyRadioButton(String radio_Value, int questionNumber) throws Exception {
		Thread.sleep(2000);
		isElementPresentVerifyClick("//*[@class='form-horizontal bgp-radio-group'][" + questionNumber
				+ "]//span[@class='bgp-label' and contains(text(), '" + radio_Value + "')]");
		WebElement radioValue_Selected = webDriver.findElement(By.xpath("//*[@class='form-horizontal bgp-radio-group']["
				+ questionNumber + "]//span[@class='bgp-label' and contains(text(), '" + radio_Value + "')]"));
		Assert.assertEquals(radioValue_Selected.isSelected(), false);

	}

	public static void verifyWarningMsg(String warning_Msg, int questionNumber) throws Exception {
		String actual = getElementText("(//div[@class='eligibility-advice'])[" + questionNumber + "]//span");

		assertThat(actual).contains(warning_Msg);

	}

	public static void clickSmartLink() throws Exception {
		isElementPresentVerifyClick(EligibilitySectionConst.SMARTLINK);

	}

	public static void verifySmartLinkUrl(String expectedUrl) {
		ArrayList<String> tabs = new ArrayList<String>(webDriver.getWindowHandles());
		webDriver.switchTo().window(tabs.get(1));
		String actual = webDriver.getCurrentUrl();
		Assert.assertEquals(expectedUrl, actual);
		webDriver.switchTo().window(tabs.get(0));

		System.out.println(actual + "=====" + expectedUrl);

	}

	public static void verifyRadioBtn_AfterRefresh(String radio_value, String questionnumber) {
		WebElement radioValue_Selected = webDriver.findElement(By.xpath("//*[@class='form-horizontal bgp-radio-group']["
				+ questionnumber + "]//span[@class='bgp-label' and contains(text(), '" + radio_value + "')]"));
		Assert.assertEquals(radioValue_Selected.isSelected(), false);

	}

	public static void pageRefresh() throws InterruptedException {
		pageReloads();
		webDriver.switchTo().alert().accept();
		Thread.sleep(5000);

	}

	public static void clickSaveBtn() throws Exception {
		isElementPresentVerifyClick(EligibilitySectionConst.Eligibility_Save_BTN);
	}

}
