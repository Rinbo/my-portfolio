describe 'Index Page', type: :feature do
  it 'displays project list' do
    visit '/'

    expect(page).to have_css('.project-area')

    within '.project-area' do
      expect(page).to have_content 'BMI Calculator'
      expect(page).to have_content 'FizzBuzz'
      expect(page).to have_content 'My blog'
    end
  end

  it 'displays an About section' do
    visit '/'

    expect(page).to have_css('#about')

    within '#about' do
      expect(page).to have_content 'Robin Börjesson'      
    end
  end

  it 'displays a section with links to social media accounts' do
    visit '/'

    expect(page).to have_css('.social-links')

    within '.social-links' do      
      expect(page).to have_link('', :href => 'https://github.com/Rinbo')
    end
  end

  it 'has a masthead wit borjessons in it' do
    visit '/'

    expect(page).to have_css('#top')

    within '#top' do      
      expect(page).to have_content("borjessons")
    end
  end
end