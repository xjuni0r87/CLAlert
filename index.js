import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'

const propTypes = {
  isVisible: PropTypes.bool,
  tag: PropTypes.number,
  isCancellable: PropTypes.bool,
  iconName: PropTypes.string,
  titleText: PropTypes.string,
  subTitleText: PropTypes.string,
  buttonCancelText: PropTypes.string,
  buttonDoneText: PropTypes.string,
  onCancelPress: PropTypes.func,
  cancelColor: PropTypes.string,
  onDonePress: PropTypes.func,
  isCancelNegative: PropTypes.bool
}

const ModalView = styled.View`
  marginHorizontal: 20px
  alignItems: center
  justifyContent: center
  backgroundColor: 'white'
  shadowColor: black
  shadowOpacity: 0.4
  elevation: 5
  shadowOffset: 1px 1px
`
const InnerModalContainer = styled.View`
  margin: 20px
`
const TitleText = styled.Text`
  marginTop: 10px
  textAlign: center
`
const SubTitleText = styled.Text`
  marginTop: 20px
  textAlign: center
`
const Row = styled.View`
  flexDirection: row
  width: 100%
  justifyContent: space-between
`
const SubmitButton = styled.TouchableOpacity`
  flex: 1
  marginVertical: 20px
  marginHorizontal: 10px
`
const Image = styled.Image`
  alignSelf: center
`

const AlertView = props => {
  
  const {
    isVisible = false,
    tag = 0,
    isCancellable = false,
    iconName,
    image,
    titleText,
    subTitleText,
    buttonCancelText,
    buttonDoneText,
    onCancelPress,
    cancelColor,
    isCancelNegative = false,
    onDonePress } = props
  return (

    <Modal
      isVisible={isVisible}
      animationIn={'fadeIn'}
      animationInTiming={500}
      animationOut={'fadeOut'}
      animationOutTiming={500}
      backdropColor={colors.backdrop}
      onBackdropPress={isCancellable ? () => onCancelPress(tag) : null}
      style={{ margin: 0, marginTop: margins.navbarWithStatusHeight, justifyContent: 'center' }}
    >
      <ModalView>
        <InnerModalContainer>
          {image && <Image source={image} />}

          {titleText && <TitleText>{titleText}</TitleText>}
          {subTitleText && <SubTitleText>{subTitleText}</SubTitleText>}
          <Row>
            {buttonCancelText && <SubmitButton negative={isCancelNegative} color={cancelColor} title={buttonCancelText} onPress={() => onCancelPress(tag)} />}
            {buttonDoneText && <SubmitButton title={buttonDoneText} onPress={() => onDonePress(tag)} />}
          </Row>
        </InnerModalContainer>
      </ModalView>
    </Modal>

  )
}

AlertView.propTypes = propTypes

export default AlertView
