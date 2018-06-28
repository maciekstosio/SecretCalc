import React from 'react';
import { View, TouchableOpacity, StyleSheet, Modal, FlatList, Dimensions, Animated } from 'react-native';
import Swiper from 'react-native-swiper';
import NavigationButton from '../components/NavigationButton'
import Image from 'react-native-fast-image'
import ImageZoom from 'react-native-image-pan-zoom';
import ActionSheet from 'react-native-actionsheet'
import Styles from '../styles'
import * as Colors from '../colors'
import Icon from '../components/Icon';

const SPACE_BETWEEN_IMAGES = 2
const IMAGES_COUNT = 3
const BUTTON_SIZE = 80
const BUTTON_BOTTOM_MARGIN = 20

export default class Gallery extends React.Component {
	actionSheet = null

	static navigationOptions = {
		title: 'Gallery',
		headerLeft: <NavigationButton title="Logout" leftIcon="lock" />,
		headerRight: <NavigationButton navigate="Settings" rightIcon="settings" />
	};

	state = {
		isModalOpen: false,
		galleryIndex: 0,
		buttonOpacity: new Animated.Value(0),
		buttonPosition: new Animated.Value(0),
	}

	componentDidMount() {
		Animated.parallel([
			Animated.timing(this.state.buttonOpacity, {
				toValue: 1,
				duration: 500,
			}),
			Animated.timing(this.state.buttonPosition, {
				toValue: BUTTON_SIZE + BUTTON_BOTTOM_MARGIN,
				duration: 500,
			})
		]).start();                   
	}

	handleImagePress = (galleryIndex) => {
		this.setState({
			galleryIndex,
			isModalOpen: true
		}) 
	}

	handleButtonPress = () => {
		Animated.parallel([
			Animated.timing(this.state.buttonOpacity, {
				toValue: 0,
				duration: 500,
			}),
			Animated.timing(this.state.buttonPosition, {
				toValue: 0,
				duration: 500,
			})
		]).start();
		this.actionSheet.show()
	}

	handleActionSheet = (index) => {
		Animated.parallel([
			Animated.timing(this.state.buttonOpacity, {
				toValue: 1,
				duration: 500,
			}),
			Animated.timing(this.state.buttonPosition, {
				toValue: BUTTON_SIZE + BUTTON_BOTTOM_MARGIN,
				duration: 500,
			})
		]).start();
	}

	renderGalleryElement = ({item, index}) => {
		const size = (Dimensions.get('window').width - (IMAGES_COUNT - 1) * SPACE_BETWEEN_IMAGES) / IMAGES_COUNT

		return (
			<TouchableOpacity key={'button' + index} onPress={() => this.handleImagePress(index)}>
				<Image
					source={item}
					key={'gallery' + index}
					style={{
						width: size,
						height: size,
						marginRight: index%IMAGES_COUNT!== (IMAGES_COUNT - 1) ? SPACE_BETWEEN_IMAGES : 0,
						marginBottom: SPACE_BETWEEN_IMAGES
					}}
				/>
			</TouchableOpacity>
		);
	}

	renderGallery = (images) => {
		return images.map((image, index) => <ImageZoom
			cropWidth={Dimensions.get('window').width}
			cropHeight={Dimensions.get('window').height}
			imageWidth={Dimensions.get('window').width}
			imageHeight={Dimensions.get('window').width}
			enableSwipeDown={true}
			onSwipeDown={() => this.setState({ isModalOpen: false })}
		>
			<Image
				key={'zoom' + index}
				source={{ uri: image.uri }}
				style={{ flex: 1}} 
			/>
		</ImageZoom>)
	}

	render() {
		const size = (Dimensions.get('window').width - (IMAGES_COUNT - 1) * SPACE_BETWEEN_IMAGES) / IMAGES_COUNT
		const images = [
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://s.yimg.com/ny/api/res/1.2/PL05ZmMeIAeFOQ.YwHJR2w--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/rollingstone.com/2788ba6a426890cabe4996731fb825fb'
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://s.yimg.com/ny/api/res/1.2/PL05ZmMeIAeFOQ.YwHJR2w--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/rollingstone.com/2788ba6a426890cabe4996731fb825fb'
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://s.yimg.com/ny/api/res/1.2/PL05ZmMeIAeFOQ.YwHJR2w--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/rollingstone.com/2788ba6a426890cabe4996731fb825fb'
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://s.yimg.com/ny/api/res/1.2/PL05ZmMeIAeFOQ.YwHJR2w--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/rollingstone.com/2788ba6a426890cabe4996731fb825fb'
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://s.yimg.com/ny/api/res/1.2/PL05ZmMeIAeFOQ.YwHJR2w--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/rollingstone.com/2788ba6a426890cabe4996731fb825fb'
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://s.yimg.com/ny/api/res/1.2/PL05ZmMeIAeFOQ.YwHJR2w--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/rollingstone.com/2788ba6a426890cabe4996731fb825fb'
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://s.yimg.com/ny/api/res/1.2/PL05ZmMeIAeFOQ.YwHJR2w--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/rollingstone.com/2788ba6a426890cabe4996731fb825fb'
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
			{
				uri: 'https://s.yimg.com/ny/api/res/1.2/PL05ZmMeIAeFOQ.YwHJR2w--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/rollingstone.com/2788ba6a426890cabe4996731fb825fb'
			},
			{
				uri: 'https://images-na.ssl-images-amazon.com/images/I/61IRouTCOWL.jpg',
			},
		];

		const { galleryIndex, isModalOpen, buttonOpacity, buttonPosition } = this.state

		return (
			<View style={Styles.container}>

				<FlatList
					data={images}
					horizontal={false}
					contentContainerStyle={{ paddingBottom: size/2 }}
					numColumns={IMAGES_COUNT}
					renderItem={this.renderGalleryElement}
				/>

      			<Animated.View style={{ opacity: buttonOpacity, bottom: buttonPosition }}>
					<TouchableOpacity style={styles.button} activeOpacity={0.75} onPress={this.handleButtonPress} >
						<Icon name="add" color={Colors.white} size={BUTTON_SIZE} />
					</TouchableOpacity>
				</Animated.View>


				<Modal visible={isModalOpen} transparent={true} animationType="fade">
					<Swiper 
						style={styles.swiper}
						showsPagination={false}
						index={galleryIndex}
					>
						{this.renderGallery(images)}
					</Swiper>
				</Modal>

				<ActionSheet
					ref={r => this.actionSheet = r}
					title={'Pick source'}
					options={['Camera', 'Photo gallery', 'Cancel']}
					cancelButtonIndex={2}
					onPress={this.handleActionSheet}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	swiper: {
		backgroundColor: Colors.black
	},
	button: {
		width: BUTTON_SIZE,
		height: BUTTON_SIZE,
		backgroundColor: Colors.primary,
		borderRadius: BUTTON_SIZE/2,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		shadowColor: Colors.primary,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.8,
		shadowRadius: 1,
		elevation: 1,
		left: Dimensions.get('window').width/2 - BUTTON_SIZE/2
	}
});

