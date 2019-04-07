package com.bdd;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * Created by peraikumar on 15/10/2018.
 */
public class Stepdef {
    Homepage hom = new Homepage();
//    Loginpage l=new Loginpage();
    Loginpage loginpage;
    Searchpage resultsPage = new Searchpage();
    WebDriver driver;
    @Given("^user is on the homepage$")
    public void userIsOnTheHomepage()  {
        String actual = hom.verifyHomePage();
        System.out.println("The textis " + actual);
        Assert.assertEquals(actual, "BIRTHDAY CAKES");
    }


    @When("^user click the login button$")
    public void userClickTheLoginButton() {

        loginpage = new Loginpage();
      loginpage.join();
    }

    @Then("^the sign in window apper on the home page$")
    public void theSignInWindowApperOnTheHomePage()  {

    }

    @When("^user can enter the valid <emailid> and valid <password>$")
    public void userCanEnterTheValidEmailidAndValidPassword()  {

    }

    @Then("^user click on the signin button$")
    public void userClickOnTheSigninButton()  {

    }
    @Then("^user should successfully loggedin$")
    public void userShouldSuccessfullyLoggedin()  {

    }

    @And("^user should see on my Account button in homepage$")
    public void userShouldSeeOnMyAccountButtonInHomepage()  {

    }


    @Given("^I am in home page$")
    public void iAmInHomePage() {
    }

    //@When("^I search a product$")
   // {
   // public void iSearchAProduct() {
       // hom.searchForProduct();
    //

    @Then("^I can view that respective product$")
    public void iCanViewThatRespectiveProduct() {

    }

    //@When("^I search a cake$")
   // public void iSearchACake() {
      //  String expected = hom.search();
        //Assert.assertEquals(cakes, expected);
   // }

    @Then("^can view that cake successfully$")
    public void canViewThatCakeSuccessfully() {
    }

    @When("^I search a cake$")
    public void iSearchACake() {
    }
}
