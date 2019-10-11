package com.palo.techtest.StepLibrary;

import static io.github.bonigarcia.wdm.DriverManagerType.FIREFOX;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Calendar;
import java.util.List;
import java.util.Properties;
import org.apache.commons.configuration.Configuration;
import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.ConfigurationFactory;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.UnexpectedAlertBehaviour;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.Select;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import com.palo.techtest.Constant.UserConfig;
import cucumber.api.Scenario;
import io.github.bonigarcia.wdm.FirefoxDriverManager;
import io.github.bonigarcia.wdm.WebDriverManager;

public class CommonLibrary {
	public static WebDriver webDriver = null;
	public static WebElement element = null;
	static WebDriverWait browserWithElementWait = null;
	static long t1 = 0;
	static long t2 = 0;

	public static Configuration config = null;
	private static Properties properties;

	public static void configMethod() throws Exception {
		ConfigurationFactory factory = new ConfigurationFactory("config/config.xml");
		config = factory.getConfiguration();

	}

	public static void initiateBrowser() throws ConfigurationException, IOException, InterruptedException {
		// device = "Desktop";
		ConfigurationFactory factory = new ConfigurationFactory("config/config.xml");
		config = factory.getConfiguration();
		if (config.getString("breakPoint").equalsIgnoreCase("Desktop")) {
			if ("Yes".equalsIgnoreCase(config.getString("FIREFOX"))) {
				FirefoxDriverManager.getInstance(FIREFOX).setup();
				FirefoxOptions firefoxOptions = new FirefoxOptions();
				webDriver = new FirefoxDriver(firefoxOptions);
				launchBrowser();

			} else if ("Yes".equalsIgnoreCase(config.getString("CHROME"))) {

				WebDriverManager.chromedriver().setup();
				ChromeOptions options = new ChromeOptions();
				options.setAcceptInsecureCerts(true);
				options.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.ACCEPT);
				webDriver = new ChromeDriver(options);
				launchBrowser();
			} else {
				System.out.println("**********Given Browser Name is Wrong************");
			}

		}

	}

	public static void launchBrowser() {
		webDriver.get(config.getString("applicationURL"));
		webDriver.manage().window().maximize();

	}

	public static void closeBrowser() throws InterruptedException, IOException {
		Thread.sleep(10000);

		webDriver.close();
		webDriver.quit();
//		Runtime.getRuntime().exec("taskkill /F /IM IEDriverServer.exe");
//		Runtime.getRuntime().exec("taskkill /F /IM ChromeDriver.exe");
		Thread.sleep(3000);

	}

	public static String getElementText(String objectProperty) throws Exception {
		element = getElementByProperty(objectProperty, webDriver);
		String linkText = element.getText();
		return linkText;
	}

	public static String getElementValue(String objectProperty) throws Exception {
		element = getElementByProperty(objectProperty, webDriver);
		String textValue = element.getAttribute("value");
		return textValue;
	}

	public static WebElement getElementByProperty(String objectProperty, WebDriver webDriver) throws Exception {
		String propertyType = null;
		WebDriverWait browserWithElementWait = null;
		try {
			if (browserWithElementWait == null) {
				browserWithElementWait = new WebDriverWait(webDriver, config.getInt("elementWaitInSeconds"));
			}
			propertyType = StringUtils.substringAfter(objectProperty, "~");
			objectProperty = StringUtils.substringBefore(objectProperty, "~");
			if (propertyType.equalsIgnoreCase("CSS")) {
				element = browserWithElementWait
						.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(objectProperty)));
				highlightElement(element, webDriver);
			} else if (propertyType.equalsIgnoreCase("XPATH")) {
				element = browserWithElementWait
						.until(ExpectedConditions.presenceOfElementLocated(By.xpath(objectProperty)));
				highlightElement(element, webDriver);
			} else if (propertyType.equalsIgnoreCase("ID")) {
				element = browserWithElementWait
						.until(ExpectedConditions.presenceOfElementLocated(By.id(objectProperty)));
				// highlightElement(webElement, browser);
			} else if (propertyType.equalsIgnoreCase("CLASSNAME")) {
				element = browserWithElementWait
						.until(ExpectedConditions.presenceOfElementLocated(By.className(objectProperty)));
				highlightElement(element, webDriver);
			} else if (propertyType.equalsIgnoreCase("NAME")) {
				element = browserWithElementWait
						.until(ExpectedConditions.presenceOfElementLocated(By.name(objectProperty)));
				highlightElement(element, webDriver);
			} else if (propertyType.equalsIgnoreCase("LINKTEXT")) {
				element = browserWithElementWait
						.until(ExpectedConditions.presenceOfElementLocated(By.linkText(objectProperty)));
				highlightElement(element, webDriver);
			} else {
				element = browserWithElementWait
						.until(ExpectedConditions.presenceOfElementLocated(By.xpath(objectProperty)));

			}
		} catch (Exception e) {

		}

		return element;
	}

	/*
	 * Methods for Element Verification
	 */
	public static boolean isElementPresentVerification(String objectProperty) {
		boolean isElementPresent = false;
		browserWithElementWait = new WebDriverWait(webDriver, 30);
		try {
			element = getElementByProperty(objectProperty, webDriver);
			if (element != null) {
				isElementPresent = true;
				t2 = System.currentTimeMillis();
			} else {
				throw new Exception("Object Couldn't be retrieved and verified");
			}
			Thread.sleep(1000);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return isElementPresent;
	}

	/*
	 * Methods for clear and text
	 */

	public static boolean clearAndEnterText(String objectProperty, String Text) throws Exception {
		boolean isTextEnteredResult = false;
		try {
			if ("-".equals(Text)) {
				isTextEnteredResult = true;

			} else {
				WebElement textBox = getElementByProperty(objectProperty, webDriver);
				textBox.clear();
				Thread.sleep(2000);
				textBox.sendKeys(Text);
				isTextEnteredResult = true;

			}
		} catch (Exception e) {
			throw new Exception("Enter text fails");
		}
		return isTextEnteredResult;
	}

	/*
	 * Methods for Highlight the Elements
	 */
	public static void highlightElement(WebElement element, WebDriver webDriver) {
		System.out.println("Hilighted");
		for (int i = 0; i < 1; i++) {
			JavascriptExecutor js = (JavascriptExecutor) webDriver;
			js.executeScript("arguments[0].setAttribute('style', arguments[1]);", element,
					"color: black; border: 3px solid black;");
		}
	}

	/*
	 * Common Method for Click
	 */
	public static boolean isElementPresentVerifyClick(String objectProperty) throws Exception {
		boolean isVerifiedAndClicked = false;
		browserWithElementWait = new WebDriverWait(webDriver, 30);

		element = getElementByProperty(objectProperty, webDriver);
		if (element != null) {
			t1 = System.currentTimeMillis();
			element.click();
			isVerifiedAndClicked = true;
		} else {
			throw new Exception("Object Couldn't be retrieved and clicked");
		}

		return isVerifiedAndClicked;
	}

	/*
	 * Methods for Screenshot
	 */

	public static void getscreenshot(String screenShotName) throws Exception {
		File scrFile = ((TakesScreenshot) webDriver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(scrFile,
				new File(UserConfig.projectLocation + "/FailureScreenShot/" + screenShotName + ".png"));
	}

	public static void getscreenshotEmbed(String screenShotName, Scenario scenario) throws Exception {
		File scrFile = ((TakesScreenshot) webDriver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(scrFile,
				new File(UserConfig.projectLocation + "/FailureScreenShot/" + screenShotName + ".png"));

		final byte[] screenshot = ((TakesScreenshot) webDriver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png");
		webDriver.quit();
	}

	/*
	 * Methods for read data from EXCell Sheet
	 */

	public static String getXLSTestData(String FileName, String SheetName, String RowId, String column)
			throws IOException {

		String col1 = null;
		DataFormatter df = new DataFormatter();
		FileInputStream file = new FileInputStream(
				new File(System.getProperty("user.dir") + "/InputData" + File.separator + FileName + ".xls"));
		HSSFWorkbook book = new HSSFWorkbook(file);
		HSSFSheet sheet = book.getSheet(SheetName);

		int rowCount = sheet.getLastRowNum() - sheet.getFirstRowNum();
		for (int rowIterator = 1; rowIterator <= rowCount; rowIterator++) {
			String row = sheet.getRow(rowIterator).getCell(0).getStringCellValue();
			if (row.equalsIgnoreCase(RowId)) {
				for (int colIterator = 1; colIterator < sheet.getRow(rowIterator).getLastCellNum(); colIterator++) {
					String col = sheet.getRow(0).getCell(colIterator).getStringCellValue();
					if (col.equalsIgnoreCase(column)) {
						Cell cellvalue = sheet.getRow(rowIterator).getCell(colIterator);
						col1 = df.formatCellValue(cellvalue);
						break;
					}
				}
			}
		}
		book.close();
		return col1;
	}

	public static void selectDropDownByValue(String objectProperty, String value) throws Exception {
		element = getElementByProperty(objectProperty, webDriver);
		if (element != null) {
			Select dropDown = new Select(element);
			dropDown.selectByVisibleText(value);
		} else {
			throw new Exception("Value cant be selected in drop down");
		}
	}

	public static List<WebElement> getListOfElements(String objectProperty) throws Exception {
		element = getElementByProperty(objectProperty, webDriver);
		List<WebElement> listSize = webDriver.findElements(By.className(objectProperty));
		return listSize;
	}

	public static Properties TD = CommonLibrary.getInstance();

	// Initiate property file
	private static Properties loadFromPropertiesFile(String propertyFileName) {
		Properties properties = new Properties();
		try {
			properties.load(new FileInputStream(propertyFileName));
		} catch (IOException e) {
			e.printStackTrace();
		}
		return properties;
	}

	public static void pageReloads() {
		webDriver.navigate().refresh();
	}

	// load the properties for file
	public static Properties getInstance() {

		if (properties == null) {
			properties = loadFromPropertiesFile("resources//Entity.properties");
		}
		return properties;
	}

	public static String formatLocalDate(LocalDate localDate, String pattern) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern(pattern);
		return localDate.format(formatter);
	}

	public static LocalDate getToday() {
		return LocalDate.now();
	}

	public static String getStartDate(String arg) {
		String startDate = "";
		if (arg.equals("TODAY")) {
			LocalDate localDate = getToday();
			startDate = formatLocalDate(localDate, "dd MMM yyyy");
		}
		return startDate;
	}

	public static String getEndDate(String arg) {
		String endDate = "";
		if (arg.equals("TOMORROW")) {
			endDate = getModifiedDate(1);
		}
		return endDate;
	}

	public static String getModifiedDate(int days) {
		DateFormat dateFormat = new SimpleDateFormat("dd MMM YYYY");
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, days);
		return dateFormat.format(cal.getTime());
	}

}
