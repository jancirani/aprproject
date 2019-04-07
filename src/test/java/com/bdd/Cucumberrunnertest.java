package com.bdd;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by peraikumar on 15/10/2018.
 */
@RunWith(Cucumber.class)
@CucumberOptions(features = ".",tags="@janci" ,dryRun = false, format={"json:target/cucumber.json", "html:target/cucumber"})

public class Cucumberrunnertest {
}
