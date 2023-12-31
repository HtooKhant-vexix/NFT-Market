import React from 'react'
import Hero from './Hero'
import Category from '../Explore/Category'
import Nav from '../Nav'
import Footer from '../Home/Footer'
import Layout from '../Layout'
import Activity from './Activity'

const Ranking = () => {
  return (
    <Layout>
      <div className="lg:pl-[110px]">
        <section className="md:h-[470px] h-[250px] explore-bg pt-3 md:pt-8 bg-[#070B24]">
          <Nav />
          <Hero />
        </section>
        <section>
          <Category/>
        </section>
        <section>
         <Activity/>
        </section>
        <section>
          <Footer/>
        </section>
      </div>
    </Layout>
  )
}

export default Ranking