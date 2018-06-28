import React from 'react';
import { View, TouchableOpacity, StyleSheet, Modal, FlatList, Dimensions, Animated, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import NavigationButton from '../components/NavigationButton';
import Image from 'react-native-fast-image';
import ImageZoom from 'react-native-image-pan-zoom';
import ActionSheet from 'react-native-actionsheet'
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import RNFS from 'react-native-fs';
import Config from '../config';
import Styles from '../styles';
import * as Colors from '../colors';
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
		images: []
	}

	loadImages = () => {
		RNFS.readdir(RNFS.DocumentDirectoryPath + Config.imageFolder).then(folder => {
			const images = folder.map(image => {
				const imageNameParts = image.split('-')

				return {
					uri: RNFS.DocumentDirectoryPath + Config.imageFolder + "/" + image,
					width: parseInt(imageNameParts[1]),
					height: parseInt(imageNameParts[2])
				}
			});

			this.setState({ images })
		})
	}

	componentDidMount() {
		this.loadImages();

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
		const saveImage = (image) => {
			const { width, height, path } = image
			const filename = path.split("/").pop()
			const name = `/${new Date().getTime()}-${width}-${height}-${filename}`;

			RNFS.mkdir(RNFS.DocumentDirectoryPath + Config.imageFolder, { NSURLIsExcludedFromBackupKey: false });
			RNFS.copyFile(path, RNFS.DocumentDirectoryPath + Config.imageFolder + name)
				.then(() => {})
				.catch(err => console.log("ERROR", err))
		}  

		if (index === 0) {
			ImagePicker.openCamera({}).then(image => {
				saveImage(image)
				this.loadImages();
			})
			.catch(err => console.log("ERROR", err))
		}

		if (index === 1) {
			StatusBar.setBarStyle('dark-content', true);
			
			ImagePicker.openPicker({
				multiple: true,
				maxFiles: 10
			}).then(images => {
				images.forEach(image => saveImage(image));
				this.loadImages();
			})
			.catch(err => console.log("ERROR", err))
			.finally(() => StatusBar.setBarStyle('light-content', true));
		}
		

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
			<TouchableOpacity key={'button' + item.uri} onPress={() => this.handleImagePress(index)}>
				<Image
					source={item}
					key={'gallery' + item.uri}
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
		return images.map((image, index) => {
			const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
			const { width, height } = image;

			//Scale images to fit screen width
			const scale = width/windowWidth;
			const newWidth = windowWidth;
			const newHeight = height/scale;
			
			return(
				<ImageZoom
					cropWidth={windowWidth}
					cropHeight={windowHeight}
					imageWidth={newWidth}
					imageHeight={newHeight}
					enableSwipeDown={true}
					onSwipeDown={() => this.setState({ isModalOpen: false })}
					key={'zoom' +  image.uri}
				>
					<Image
						source={{ uri: image.uri }}
						style={{ width: newWidth, height: newHeight }}
					/>
				</ImageZoom>
			);
		})
	}

	render() {
		const size = (Dimensions.get('window').width - (IMAGES_COUNT - 1) * SPACE_BETWEEN_IMAGES) / IMAGES_COUNT
		const { galleryIndex, isModalOpen, buttonOpacity, buttonPosition, images } = this.state

		return (
			<View style={Styles.container}>
				<FlatList
					data={images}
					horizontal={false}
					contentContainerStyle={{ paddingBottom: size/2 }}
					numColumns={IMAGES_COUNT}
					renderItem={this.renderGalleryElement}
					keyExtractor={(item, index) => 'listItem' + item.uri}
				/>

      			<Animated.View style={{ opacity: buttonOpacity, bottom: buttonPosition }}>
					<TouchableOpacity  activeOpacity={0.75} onPress={this.handleButtonPress} >
						<LinearGradient
							start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
							locations={[0, 0.75, 1.0]}
							colors={[ '#ff2b00', '#ed3009' ]}
							style={styles.button}
						>
							<Icon name="add" color={Colors.white} size={BUTTON_SIZE} />
						</LinearGradient>
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

