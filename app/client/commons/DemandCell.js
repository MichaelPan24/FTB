import  React, {Component}  from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

export default class DemandCell extends Component{
    constructor(props){
        super(props)
        console.disableYellowBox = true;
    }


    _genImage= ({image}) => {
        let imgArr = [];
        for(var i=0; i< image.length; i++){
            imgArr.push(
                <Image
                    source={{uri: image[i]}}
                    style = {styles.img}
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
    render(){
        const {data, onPress} = this.props
        const date = new Date(data.date);
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress} style={styles.cellContainer}>
                    <View style={styles.header}>
                        <View style={styles.nameContainer}>
                            <Image
                                source={{uri:data.avatar}}
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
                            {`${date.getFullYear().toString()}-${date.getMonth().toString()}-${date.getDay().toString()}`}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )     
    }
}

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
        flexDirection: 'row',
        marginBottom: 5
    },
    avatar: {
        width: 36,
        height: 36
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