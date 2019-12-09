module.exports = {
  logo: `${process.env.URL}art-14.svg`,
  bannerImg: `${process.env.URL}art-06.svg`,
  paperImg: `${process.env.URL}art-04.svg`,
  developer: `${process.env.URL}art-07.svg`,
  student: `${process.env.URL}art-08.svg`,
  manager: `${process.env.URL}art-09.svg`,
  scrap: `${process.env.URL}art-10.svg`,
  scrapbook: `${process.env.URL}art-11.svg`,
  offline: `${process.env.URL}art-12.svg`,
  share: `${process.env.URL}art-13.svg`,
  bg: {
    background: `radial-gradient(
      rgba(250, 250, 250, 0.85),
      rgba(250, 250, 250, 1)
    ),
    url("${process.env.URL}bg-what.webp")`
  },
  bgOnly: {
    backgroundImage: `url("${process.env.URL}bg-what.webp")`
  },
  emptyicon: {
    backgroundImage: `url('${process.env.URL}write.webp')`
  },
  audienceBg: {
    backgroundImage: `url('${process.env.URL}art-05.svg')`
  },
  rumple: {
    backgroundImage: `url('${process.env.URL}crumpled-paper.webp')`
  },
  dropDownArrow: `${process.env.URL}arrow.webp`,
  profilePic: url => ({
    backgroundImage: `url('${url}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  })
}