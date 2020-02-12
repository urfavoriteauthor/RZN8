import React from 'react'
import MainCard from './maincard'
import RZN8FIRE from '../assets/images/RZN8FIRE.GIF'
import RZN8RAIN from '../assets/images/RZN8RAIN.GIF'
import RZN8SHOCK from '../assets/images/RZN8SHOCK.GIF'

class Cardrows extends React.Component {
    render() {
        return (
            <div className='div'>
            <div className="container-fluid d-flex content-justify-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <MainCard imgsrc={RZN8FIRE} title="About" description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae tortor sollicitudin, hendrerit neque nec, consequat purus. Donec justo nisi, egestas id eros suscipit, fringilla viverra ligula. In eget laoreet nunc. Curabitur ac ex sit amet lorem luctus pellentesque. Morbi et hendrerit mi. Nulla facilisis purus dui, eget lacinia justo tincidunt quis. Vestibulum a leo mauris.'/>
                    </div>
                    <div className='col-md-4'>
                        <MainCard imgsrc={RZN8RAIN} title="Music" description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae tortor sollicitudin, hendrerit neque nec, consequat purus. Donec justo nisi, egestas id eros suscipit, fringilla viverra ligula. In eget laoreet nunc. Curabitur ac ex sit amet lorem luctus pellentesque. Morbi et hendrerit mi. Nulla facilisis purus dui, eget lacinia justo tincidunt quis. Vestibulum a leo mauris.'/>
                    </div>
                    <div className='col-md-4'>
                        <MainCard imgsrc={RZN8SHOCK} title="Events" description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae tortor sollicitudin, hendrerit neque nec, consequat purus. Donec justo nisi, egestas id eros suscipit, fringilla viverra ligula. In eget laoreet nunc. Curabitur ac ex sit amet lorem luctus pellentesque. Morbi et hendrerit mi. Nulla facilisis purus dui, eget lacinia justo tincidunt quis. Vestibulum a leo mauris.'/>
                    </div>
                    {/* First Row */}
                </div>
                </div>
                </div>)
                }
            }
            export default Cardrows;