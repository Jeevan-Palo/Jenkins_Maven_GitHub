package com.palo.techtest.StepDefinition;

import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public class BrowserSteps {

	 //browser stack login details

    public static final String USERNAME = "jeevanradhakrish1";
    public static final String AUTOMATE_KEY = "WPCFsGvEdmGh7jYpHUGk";
    public static final String URL = "https://jeevanradhakrish1:WPCFsGvEdmGh7jYpHUGk@hub-cloud.browserstack.com/wd/hub";


         //public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";

    public static void main(String[] args) throws Exception {


        DesiredCapabilities caps = new DesiredCapabilities();

        //mobile - Samsung Galaxy S7

//        caps.setCapability("device", "Samsung Galaxy S9 Plus");
//        caps.setCapability("realMobile", "true");
//        caps.setCapability("os_version", "9.0");
//        caps.setCapability("device", "Samsung Galaxy S7");
//        caps.setCapability("realMobile", "true");
//        caps.setCapability("os_version", "6.0");
        
        
        //  mobile iPhone XS      
        caps.setCapability("device", "iPhone XS");
        caps.setCapability("realMobile", "true");
        caps.setCapability("os_version", "13");

        // Test - open google and search for the string Padmaraj Nidagundi

        WebDriver driver = new RemoteWebDriver(new URL(URL), caps);
        driver.get("http://www.google.com");
        WebElement element = driver.findElement(By.name("q"));

        element.sendKeys("Pallo IT Singapore");
        element.submit();

        System.out.println(driver.getTitle());
        driver.quit();

        //Logs
        caps.setCapability("browserstack.debug", "true");


    }
}
