import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';
import { renderSync } from 'sass';

const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "myeh",
    runtime: 1
}

const testEpisodeWithoutImage = {
    //Add in approprate test data structure here.
    id: 0,
    name: "",
    season: 2,
    summary: "myeh",
    number: 2,
    runtime: 3,
    image: ""

}

test("renders without error", () => {
    //arrange
    render(<Episode episode={testEpisode}/>)
});

test("renders the summury test passed as prop", ()=>{
    //arrange = render relevant component
    render(<Episode episode={testEpisode} />)
    //act get the thing
    const summary = screen.getByText("myeh")
    //sanity test
    //const summary = screen.getByText("myehhhh")
    //assert check that its where it should be
    expect(summary).toBeInTheDocument()
    expect(summary).toBeVisible()
    
});

test("renders default image when image is not defined", ()=>{
    //arrange render relevent cmponent
    render(<Episode episode={testEpisodeWithoutImage} />)
    // act get the image
    const img = screen.getByAltText("./stranger_things.png")
    //sanity test 
    //const img = screen.getByAltText(".//stranger")
    //assert check that is there
    expect(img).toBeVisible()
    expect(img).toBeInTheDocument()
    expect(img).toBeValid()
    
})

//Tasks
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.
//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.