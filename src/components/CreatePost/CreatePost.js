import React from 'react';
import Input from '../Input/Input';
import FormButton from '../FormButton/FormButton';
import './CreatePost.css';

class CreatePost extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTab: "Image",
            selectedModifier: "",
            selectedCategory: ""
        }
        this.onClickImage = this.onClickImage.bind(this);
        this.onClickLink = this.onClickLink.bind(this);
        this.onClickText = this.onClickText.bind(this);
    }

    onClickImage() {
        this.setState((state) => {
            return {
                selectedTab: "Image"
            }
        });
    }

    onClickLink() {
        this.setState((state) => {
            return {
                selectedTab: "Link"
            }
        })
    }

    onClickText() {
        this.setState((state) => {
            return {
                selectedTab: "Text"
            }
        })
    }

    render() {
        const ImagePostContent = (
            <div className="image-upload"></div>
        );
        const LinkPostContent = (
            <div className="link-inputs">
                <Input
                    placeholder="Source"
                    style={{width: "630px", margin: "0 auto"}}
                />
                <Input
                    placeholder="Season"
                    style={{width: "75px", paddingLeft: "6px", margin: "0 auto"}}
                />
                <Input
                    placeholder="Episode"
                    style={{width: "80px", paddingLeft: "6px", margin: "0 auto"}}
                />
            </div>
        );
        const TextPostContent = (
            <div className="text-post">
                <textarea className="text-post-input"></textarea>
            </div>
        );


        return (
            <div className="create-post">
                <h1 style={{textAlign: "center"}}>New Post</h1>
                <div className="post-tabs">
                    <button 
                        className="post-tab first-tab"
                        onClick={this.onClickImage}
                        style={this.state.selected === "Image" ? {backgroundColor: "#e6e6e6"} : null }
                    >
                        Image Post
                    </button>
                    <button 
                        className="post-tab second-tab"
                        onClick={this.onClickLink}
                        style={this.state.selected === "Link" ? {backgroundColor: "#e6e6e6"} : null }
                    >
                        Link Post
                    </button>
                    <button 
                        className="post-tab third-tab"
                        onClick={this.onClickText}
                        style={this.state.selected === "Text" ? {backgroundColor: "#e6e6e6"} : null }
                    >
                        Text Post
                    </button>
                </div>
                {this.state.selectedTab==="Image" ? ImagePostContent : null}
                <Input style={{width: "815px"}} placeholder="Title" />
                {this.state.selectedTab==="Link" ? LinkPostContent : null}
                {this.state.selectedTab==="Text" ? TextPostContent : null}
                <Input 
                    placeholder="Add Tags" 
                    style={{width: "815px"}}
                />
                <div className="bottom-post">
                    <div className="bottom-buttons">
                        <div className="modifiers">
                            <h3 className="bottom-heading">Modifiers</h3>
                            <div className="modifier-post-buttons">
                                <button className="modifier-post-button nsfw-post-button">NSFW</button>
                                <button className="modifier-post-button spoiler-post-button">SPOILER</button>
                            </div>
                        </div>
                        <div className="spoilers">
                            <h3 className="bottom-heading">Category</h3>
                            <div className="category-post-buttons">
                                <button className="category-post-button"># discussion</button>
                                <button className="category-post-button"># meme</button>
                                <button className="category-post-button"># art</button>
                            </div>
                        </div>
                    </div>
                    <FormButton text="Create Post" />
                </div>
            </div>                              
        );
    }
}

export default CreatePost;
