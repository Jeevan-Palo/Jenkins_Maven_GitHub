package com.palo.techtest.StepDefinition;


	
	import java.net.URL;
	import java.net.MalformedURLException;

	import org.openqa.selenium.support.ui.WebDriverWait;
	import org.openqa.selenium.remote.DesiredCapabilities;
	import org.openqa.selenium.support.ui.ExpectedConditions;

	import io.appium.java_client.MobileBy;
	import io.appium.java_client.ios.IOSDriver;
	import io.appium.java_client.ios.IOSElement;

	public class BrowserAppTest {
	  public static String accessKey = "WPCFsGvEdmGh7jYpHUGk";
	  public static String userName = "jeevanradhakrish1";

	  public static void main(String args[]) throws MalformedURLException, InterruptedException {
	    DesiredCapabilities caps = new DesiredCapabilities();

	    caps.setCapability("device", "Samsung Galaxy S9 Plus");
	    caps.setCapability("os_version", "9.0");
	    caps.setCapability("name", "Bstack-[Java] Sample Test");
	    caps.setCapability("app", "bs://9a1f7f5fe7d7050bc0d54192f3d1c7655cb2c8d9");
	    

//	    IOSDriver driver = new IOSDriver(new URL("http://"+userName+":"+accessKey+"@hub-cloud.browserstack.com/wd/hub"), caps);
	    IOSDriver<?> driver = new IOSDriver<>(new URL("http://"+userName+":"+accessKey+"@hub-cloud.browserstack.com/wd/hub"), caps);

	    IOSElement textButton = (IOSElement) new WebDriverWait(driver, 30).until(
	        ExpectedConditions.elementToBeClickable(MobileBy.AccessibilityId("Text Button")));
	    textButton.click();
	    IOSElement textInput = (IOSElement) new WebDriverWait(driver, 30).until(
	        ExpectedConditions.elementToBeClickable(MobileBy.AccessibilityId("Text Input")));
	    textInput.sendKeys("hello@browserstack.com" + "\n");

	    Thread.sleep(5000);

	    IOSElement textOutput = (IOSElement) new WebDriverWait(driver, 30).until(
	        ExpectedConditions.elementToBeClickable(MobileBy.AccessibilityId("Text Output")));

	    if(textOutput != null && textOutput.getText().equals("hello@browserstack.com"))
	        assert(true);
	    else
	        assert(false);

	    driver.quit();
	  }
	}


