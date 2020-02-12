import React from 'react'
import Navbar from '../components/navbar'
import Social from '../components/social'
import Cardrows from '../components/cardrows'
import Footer from '../components/footer'
import Feature from '../components/feature'

class Home extends React.Component {
    render() {
        return (
            <div id='home'>
                <div>
                    <Navbar />
                    
                    <Cardrows />
                    <div className='container-fluid d-flex content-justify-center'>
                    <div className='row'>
                            <div className='col-md-4'>

                            </div>
                            <div className='col-md-4'>

                            </div>
                            <div className='col-md-4'>

                            </div>
                        </div>

                            </div>
                </div>
                <Feature/>
                <div>
                <Footer/>
                </div>

            </div>

        )
    }
}
export default Home;