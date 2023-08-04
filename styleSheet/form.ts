import { StyleSheet } from "react-native";

const formStyleSheet = StyleSheet.create({
    formMessageWrapper: {
        fontSize: 12,
        lineHeight: 1.33337,
        fontWeight: '400',
        letterSpacing: -0.01 * 12,
        color: '#e30000',
        position: 'relative',
        marginTop: 0.47059,
        marginBottom: 0.70588,
        display: 'none',
    },

    formMessageWrapperError: {
        display: 'flex',
    },

    formMessageWrapperBefore: {
        display: 'none',
    },

    formMessageWrapperBeforeVisible: {
        paddingRight: 0.17647,
        top: 0.17647,
    },

    formLabel: {
        position: 'relative',
        fontSize: 17,
        lineHeight: 1.23536 * 17,
        fontWeight: '400',
        letterSpacing: -0.022,
        color: '#1d1d1f',
    },

    formLabelSmall: {
        position: 'relative',
        fontSize: 12,
        lineHeight: 1.33337 * 12,
        fontWeight: '400',
        letterSpacing: -0.01 * 12,
        color: '#1d1d1f',
    },
    
    formGroupLabel: {
        position: 'relative',
        fontSize: 17,
        lineHeight: 1.23536 * 17,
        fontWeight: '400',
        letterSpacing: -0.022 * 17,
        color: '#1d1d1f',
    },

    formGroupLabelError: {
        color: '#e30000',
    },

    formTitle: {
        position: 'relative',
        fontSize: 24,
        lineHeight: 1.16667 * 24,
        fontWeight: '600',
        letterSpacing: 0.009 * 24,
        color: '#1d1d1f',
    },

    fieldCaption: {
        marginBottom: 14,
    },

    fieldCaptionError: {
        marginBottom: 0,
    },

    errorNoErrorMsgInput: {
        marginBottom: 14,
    },

    errorHasErrorsFocus: {
        backgroundColor: '#fff',
    },

    verticalRightDivider: {
        borderRightWidth: 1,
        borderRightColor: '#f5f5f7',
    },

    themeDarkVerticalRightDivider: {
        borderRightWidth: 1,
        borderRightColor: '#1d1d1f',
    },

    verticalLeftDivider: {
        borderLeftWidth: 1,
        borderLeftColor: '#f5f5f7',
    },

    inlineError: {
        color: '#e30000',
        fontSize: 16,
    },

    infoIcon: {
        color: '#86868b',
        fontSize: 18,
    },

    iconText: {
        marginTop: -3,
    },

    formAlert: {
        width: 'auto',
        height: 'auto',
        borderRadius: 12,
        fontSize: 17,
        lineHeight: 1.23536,
        fontWeight: '400',
        letterSpacing: -0.022 * 17,
        backgroundClip: 'padding-box',
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 17,
        marginTop: 17,
        color: '#1d1d1f',
        borderWidth: 1,
        borderColor: '#d2d2d7',
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
    },

    formAlertError: {
        backgroundColor: '#fff2f4',
        borderColor: 'rgba(227, 0, 0, 0.4)',
    },

    formAlertTitle: {
        marginBottom: 9,
    },

    formTextbox: {
        position: 'relative',
    },

    formTextboxInputDisabled: {
        color: '#86868b',
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
    },

    formTextboxErrorInput: {
        borderColor: '#e30000',
        backgroundColor: '#fff2f4',
    },

    formTextboxErrorLabel: {
        color: '#e30000',
    },

    formTextboxInput: {
        fontSize: 17,
        lineHeight: 1.23536 * 17,
        fontWeight: '400',
        letterSpacing: -0.022 * 17,
        width: '100%',
        height: 52,
        borderRadius: 12,
        borderWidth: 1,
        borderStyle: 'solid',
        marginBottom: 14,
        paddingVertical: 14,
        paddingHorizontal: 16,
        textAlign: 'left',
        color: '#1d1d1f',
        borderColor: '#d2d2d7',
        backgroundColor: 'hsla(0, 0%, 100%, 0.8)',
        overflow: 'hidden',
    },

    formTextboxInputFocusLabel: {
        fontSize: 12,
        lineHeight: 1.33337 * 12,
        fontWeight: '400',
        letterSpacing: -0.01 * 12,
        top: 10,
    },

    formTextboxInputEnteredLabel: {
        fontSize: 12,
        lineHeight: 1.33337  * 12,
        fontWeight: '400',
        letterSpacing: -0.01 * 12,
        top: 5,
    },

    formTextboxInputFocused: {
        shadowColor: 'rgba(0, 125, 250, 0.6)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        borderWidth: 0,
        outlineWidth: 0,
    },
    formTextboxInputError: {
        marginBottom: 0,
    },
    formTextboxLabel: {
        position: 'absolute',
        pointerEvents: 'none',
        top: 1.05882 * 17,
        overflow: 'hidden',
        maxWidth: '90%',
        left: 17,
        fontSize: 17,
        lineHeight: 1.23536 * 17,
        fontWeight: '400',
        letterSpacing: -0.022 * 17,
        color: '#86868b'
    }
})

export default formStyleSheet;