import React from 'react'
import RZN8JULY from '../assets/images/RZN8JULY.GIF'
// import * from '.app.css'

class Feature extends React.Component {
    render() {

        return (
            <div id="featured" className="card border-dark bg-dark text-white mb-12 content-justify-center">
                <div className='overflow'>
                <img src={RZN8JULY} alt="featured Book" className="card-img-top" alt="..." />

                <div className="card-body bg-dark">
                    <h5 className="card-title">About me</h5>
                    <h3 className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero et nunc aliquam dignissim ut commodo ex. Nam ligula velit, tempus et bibendum maximus, viverra id quam. In quam velit, maximus eu tincidunt sed, semper luctus felis. Pellentesque elit massa, luctus eu auctor sit amet, facilisis vestibulum risus. Nunc faucibus arcu nec tortor euismod ultricies. Nulla porta lobortis massa dictum dictum. Suspendisse eu est at ipsum luctus tempor vitae vulputate sapien. Nulla ut euismod felis. Nunc ullamcorper lectus vitae ex luctus posuere. Donec efficitur, erat ac eleifend commodo, sapien magna lobortis erat, non gravida tellus nulla ac ex. Sed quis felis mi. Nullam ante tellus, lacinia semper tellus id, fringilla laoreet est. Suspendisse nisi mauris, congue mattis pretium sed, consequat vitae arcu. Pellentesque a viverra lorem. Curabitur at sem mi.

Morbi vestibulum, mauris eget pharetra scelerisque, diam ex tincidunt nulla, a euismod quam lorem id ipsum. Praesent viverra ornare nunc sed sagittis. Nulla feugiat arcu ac leo posuere porta. Donec consequat viverra porta. Duis vitae tempus nulla, eget lacinia erat. Donec pellentesque sapien sem, non ultrices diam condimentum at. Duis id magna felis. Etiam varius consectetur felis, vel dictum mauris pulvinar non. Praesent vel hendrerit sapien. Vestibulum elementum volutpat elit, at tristique mauris ornare non. Aenean faucibus, justo vel cursus gravida, enim ante mollis massa, vel fermentum purus elit ac turpis. Fusce semper turpis ut dolor rhoncus, ac condimentum quam volutpat. Pellentesque sollicitudin purus nec lobortis ultricies. Sed ut sodales nibh.</h3>
                    <a href="#" className='btn btn-outline-danger'>Purchase here!</a>
                    <p className="card-text"><small className="text-muted">RZN8 Print and Publishing</small></p>
                </div>
                </div>
            </div>
        )
    }
}
export default Feature;