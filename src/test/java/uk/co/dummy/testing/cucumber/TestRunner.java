package uk.co.dummy.testing.cucumber;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Feature",
        glue = {"uk.co.dummy.testing.stepDefinition"},
        format = {"pretty","html:target/site/cucumber-pretty"},
        tags = {"@createAccount"}

)


public class TestRunner {
}
