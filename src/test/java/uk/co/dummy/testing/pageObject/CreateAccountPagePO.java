package uk.co.dummy.testing.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPagePO {

    //Object Locator
    @FindBy(id = "firstname")
    public static WebElement firstnameField;

    @FindBy(id = "lastname")
    public static WebElement lastnameField;

    @FindBy(id = "email_address")
    public static WebElement emailField;

    @FindBy(id = "password")
    public static WebElement passwordField;

    @FindBy(id = "password-confirmation")
    public static WebElement passwordConfirmationField;

    @FindBy(css = ".submit > span:nth-child(1)")
    public static WebElement createAccountButton;

    //Initialised Elements
    public CreateAccountPagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }

    //Page specific Method

    public void enterFirstnameFeild(String Firstname){firstnameField.sendKeys(Firstname);}

    public void enterLastnameField(String Lastname){lastnameField.sendKeys(Lastname);}

    public void enterEmailField(String Email){emailField.sendKeys(Email);}

    public void enterPasswordField(String Password){passwordField.sendKeys(Password);}

    public void enterPasswordConfirmationField(String Confirmpassword){passwordConfirmationField.sendKeys(Confirmpassword);}

    public void clickCreateAccountButton(){createAccountButton.click();}
}
