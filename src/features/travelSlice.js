import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    serviceBtn: false,
    blogBtn: false,
    contactBtn: false,
    pricingBtn: false,
    reviewBtn: false,
    homeBtn: false,
    packagesBtn: false,

    nightMode: false,
    userButton: false,
    menuButton: false,
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        serviceBtnClick: (state, action) => {
            state.serviceBtn = !state.serviceBtn
            console.log('service btn click')
        },
        blogBtnClick: (state, action) => {
            state.blogBtn = !state.blogBtn
            
        },
        contactBtnClick: (state, action) => {
            state.contactBtn = !state.contactBtn
            
        },
        homeBtnClick: (state, action) => {
            state.homeBtn = !state.homeBtn
            
        },
        packagesBtnClick: (state, action) => {
            state.packagesBtn = !state.packagesBtn
            
        },
        pricingBtnClick: (state, action) => {
            state.pricingBtn = !state.pricingBtn
            
        },
        reviewBtnClick: (state, action) => {
            state.reviewBtn = !state.reviewBtn
            
        },
        nightModeClick: (state, action) => {
            state.nightMode = !state.nightMode
            
        },
        userButtonClick: (state, action) => {
         

            if(state.menuButton){
                state.menuButton = !state.menuButton 
                state.userButton = true
            } else {
                state.userButton = !state.userButton
            }
            
            
            console.log('user button clicked')
        },
        menuButtonClick: (state, action) => {
            if(state.userButton){
                state.userButton = !state.userButton 
                state.menuButton = true
            } else {
                state.menuButton = !state.menuButton
            }
        }
    }
})

export const { nightModeClick, userButtonClick, menuButtonClick, serviceBtnClick, blogBtnClick, contactBtnClick, homeBtnClick, packagesBtnClick, pricingBtnClick, reviewBtnClick } = taskSlice.actions;
export default taskSlice.reducer