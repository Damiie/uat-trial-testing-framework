package uk.co.dummy.testing.stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.FirefoxDriverManager;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import uk.co.dummy.testing.pageObject.CreateAccountPagePO;
import uk.co.dummy.testing.pageObject.HomePagePO;

public class AccountManagementStep {
    WebDriver driver;

    @Given("^luma application is launched$")
    public void lumaApplicationIsLaunched() {
        WebDriverManager.firefoxdriver().setup();
        driver = new FirefoxDriver();
        driver.get("http://demo-magento2.vuestorefront.io/");
    }

    @And("^user is on create account page$")
    public void userIsOnCreateAccountPage() {
        //driver.findElement(By.linkText("Create an Account")).click();
        HomePagePO homePagePO = new HomePagePO(driver);
        homePagePO.clickCreateAnAccountLink();
    }

    @When("^user enter \"([^\"]*)\"$")
    public void userEnter(String Firstname) throws Throwable {
        //driver.findElement(By.id("firstname")).sendKeys(Firstname);
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterFirstnameFeild(Firstname);
    }

    @And("^user enter \"([^\"]*)\" on create account page$")
    public void userEnterOnCreateAccountPage(String Lastname) throws Throwable {
        //driver.findElement(By.id("lastname")).sendKeys(Lastname);
        CreateAccountPagePO createAccountPagePO= new CreateAccountPagePO(driver);
        createAccountPagePO.enterLastnameField(Lastname);
    }

    @And("^user enter their \"([^\"]*)\"$")
    public void userEnterTheir(String Email) throws Throwable {
       //driver.findElement(By.id("email_address")).sendKeys(Email);
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterEmailField(Email);
    }
    @And("^users enter \"([^\"]*)\"$")
    public void usersEnter(String Password) throws Throwable {
        //driver.findElement(By.id("password")).sendKeys(Password);
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterPasswordField(Password);
    }

    @And("^user enters \"([^\"]*)\"$")
    public void userEnters(String Confirmpassword) throws Throwable {
        //driver.findElement(By.id("password-confirmation")).sendKeys(Confirmpassword);
        CreateAccountPagePO createAccountPagePO= new CreateAccountPagePO(driver);
        createAccountPagePO.enterPasswordConfirmationField(Confirmpassword);

    }
    @And("^user click create account$")
    public void userClickCreateAccount() {
        //driver.findElement(By.cssSelector(".submit > span:nth-child(1)")).click();
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.clickCreateAccountButton();
    }

    @Then("^My account dashboard is displayed$")
    public void myAccountDashboardIsDisplayed() {
    }


}
