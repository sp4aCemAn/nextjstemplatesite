# template website

This template relies on a tool that I have made that still is being worked on and isn't public yet.
this tool simply adjust the text/image content being shown it also acts as an article editor and adds it to the website to be published

to publish a new article on the website we just add it in the editor and then running

`git add .`

`git commit -m "adding article or whatever message you want here"`

`git push`

or you can use github desktop to publish the changes to the website

to run the webserver just run `./runContainer.sh` in wsl2 or mac or linux.

### Images to have:

    1. Headshot of some sort
    2. backdrop of area running in
    3. Some image for the about me
    4. other images ect (optional)

### content

    1. slogan
    2. emblem
    3. about me statement
    4. at lest 4 social media
    5. volenteer statement
    6. all addiotional layout components that have text must be filled
    7. all websites should have the same privacy policy

each website is built from a series of page components

each page component corresponds to each path

/ << HomePage

/about/ << AboutMePage.tsx

and each of the pages are named as such
AboutMePage1.tsx ,AboutMePage2.tsx ect

each of these pages simply act as a layout for components

each of these components can be updated live using the website editor and the code editor

### example of what the template should be structured like

```

  src
    app << where the configurator compiles too
  │   about << each page is stored in a subfolder example /about mapps to here
  │ │ └  page.tsx
  │   news
  │ │   an-news-article-about-shibas
  │ │   another-article-markdonw-test
  │ │   cats
  │ │   mr-beast
  │ │   new
  │ │   new-article
  │ │   video-embed-test
  │ │ └  page.tsx
  │   privacy
  │ │ └  page.tsx
  │   volunteer
  │ │ └  page.tsx
  │ │  favicon.ico
  │ │  globals.css
  │ │  layout.tsx
  │ │  page.tsx
  │ └ 󰂺 readme.md
    components << here is where you will add/edit existing components.
      article << these are components that make up the article page for example
    │ │  ArticleContent.tsx
    │ │  ArticleHeader.tsx
    │ └  ArticleSummary.tsx
      footer
    │ └  Footer.tsx << this is the footer
      Header
    │ └  Header.tsx << this is the header
      HeroSection << this is the main "billboard" section where a big slogan or headshot photo goes
    │ └  BannerAboutMe.tsx
      Midsection
    │ │  AboutSection.tsx
    │ └  midsection.tsx
      pageType << here are the actuall pages for each route
    │ │  AboutMePage1.tsx
    │ │  AboutMePage3.tsx
    │ │  DonationPage1.tsx
    │ │  HomePage1.tsx
    │ │  HomePage2.tsx
    │ │  NewsArticlePage1.tsx
    │ │  NewsPage1.tsx
    │ │  PrivacyPage1.tsx
    │ └  VolunteerPage1.tsx
      subcomponents << various component that can be used
        buttons
        floating
        imageFrames
      │  LeftAlText.tsx
      │  NewsPanel.tsx
      └  QuickLinks.tsx
```
