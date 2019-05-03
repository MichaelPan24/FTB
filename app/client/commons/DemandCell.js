import  React, {Component}  from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import {connect} from 'react-redux';
import actions from '../action/index';

export class DemandCell extends Component{
    constructor(props){
        super(props)
        console.disableYellowBox = true;
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){

    }

    _genImage= ({image}) => {
        let imgArr = [];
        for(var i=0; i< image.length; i++){
            imgArr.push(
                <Image
                    source={{uri: image[i]}}
                    style = {styles.img}
                    key={`${image[i]}-${i}`}
                />
            )
        }
        if(imgArr.length <= 3){
            return imgArr;
        }else{
            //>2 的图片展示使用剩余数量图标展示
            return imgArr.slice(0, 3).concat(this._restImg(imgArr))
        }
    }

    _restImg = (imgArr) => {
        return <Text>{`+${imgArr.length - 3}`}</Text>
    }
 
    showDescription = (data) => {
        const {description} = data;
            if(description.toString().length <=100){
                return description.toString();
            }
            return description.toString.subStr(0, 100);
    }

    _favoriteProject = () => {
        
    }

    onTag = () => {
        this.setState({
            isTagged: !isTagged
        })
    }
    render(){
        const {data, onPress, user} = this.props
        const date = new Date(data.date);
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress} style={styles.cellContainer} activeOpacity={0.8}>
                    <View style={styles.header}>
                        <View style={styles.nameContainer}>
                            <Image
                                source={data.avatar ? {uri: data.avatar} : require('../../../img/AuthorAvatar.png')}
                                style={styles.avatar}
                            />
                            <Text style={styles.text}>
                                {data.companyName}
                            </Text>
                            
                        </View>
                        
                        <Text style={styles.header_title}>
                            {data.title}
                        </Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description}>
                            {this.showDescription(data)}
                        </Text>
                        <View style={styles.imgContainer}>
                            {this._genImage(data)}
                        </View>
                        
                    </View>
                    <View style={styles.footer}> 
                        <Text>
                            {`${date.getFullYear().toString()}-${(date.getMonth()+1).toString()}-${date.getDay().toString()}`}
                        </Text>
                    </View>
                    <Icon
                        size={20}
                        name={this.state.isTagged ? 'tag' :'tago'}
                        onPress={()=> this.onTag()}
                        style={{position: 'absolute', right: 15, top: 10}} 
                        // color={}
                        />
                </TouchableOpacity>
            </View>
        )     
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(DemandCell);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5
    },
    cellContainer:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderBottomColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomStartRadius: 55,
        marginBottom: 5,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'column',
        flex: 1,
        marginTop: 5,
        marginLeft: 50,
        marginBottom: 15,
    },
    nameContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 20
    },
    text: {
        textAlignVertical: 'center',
        marginLeft: 5
    },
    header_title: {
        fontWeight: 'bold'
    },
    description_container:{
        flex: 1,
        flexDirection: 'column',
        marginLeft: 50,
    },
    description:{

    },
    imgContainer:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 15
    },  
    img: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    footer: {
        position: 'absolute',
        right: 10,
        bottom: 5
    },
})