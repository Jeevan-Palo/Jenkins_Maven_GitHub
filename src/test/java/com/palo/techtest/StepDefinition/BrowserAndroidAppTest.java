package com.palo.techtest.StepDefinition;


	import java.net.URL;
	import java.util.List;
	import java.net.MalformedURLException;

	import io.appium.java_client.MobileBy;
	import io.appium.java_client.android.AndroidDriver;
	import io.appium.java_client.android.AndroidElement;

	import org.openqa.selenium.support.ui.ExpectedConditions;
	import org.openqa.selenium.support.ui.WebDriverWait;
	import org.openqa.selenium.remote.DesiredCapabilities;
	 
	public class BrowserAndroidAppTest {
	  
	  public static String userName = "jeevanradhakrish1";
	  public static String accessKey = "WPCFsGvEdmGh7jYpHUGk";

	  public static void main(String args[]) throws MalformedURLException, InterruptedException {
	    DesiredCapabilities caps = new DesiredCapabilities();

	    caps.setCapability("device", "Samsung Galaxy S8 Plus");
	    caps.setCapability("app", "bs://9a1f7f5fe7d7050bc0d54192f3d1c7655cb2c8d9");

	    AndroidDriver<AndroidElement> driver = new AndroidDriver<AndroidElement>(new URL("https://"+userName+":"+accessKey+"@hub-cloud.browserstack.com/wd/hub"), caps);

	    AndroidElement searchElement = (AndroidElement) new WebDriverWait(driver, 30).until(
	        ExpectedConditions.elementToBeClickable(MobileBy.AccessibilityId("Search Wikipedia")));
	    searchElement.click();
	    AndroidElement insertTextElement = (AndroidElement) new WebDriverWait(driver, 30).until(
	        ExpectedConditions.elementToBeClickable(MobileBy.id("org.wikipedia.alpha:id/search_src_text")));
	    insertTextElement.sendKeys("BrowserStack");
	    Thread.sleep(5000);

	    List<AndroidElement> allProductsName = driver.findElementsByClassName("android.widget.TextView");
	    assert(allProductsName.size() > 0);

	    driver.quit();
	  }
	}