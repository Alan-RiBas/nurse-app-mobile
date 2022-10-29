import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  perfilArea:{
    width: '70%',
    height: '30%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  perfilTxt:{
    fontSize: 23,
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 21,
    color: '#0C008C',
  },
  perfilImg:{
    width: 106,
    height: 105, 
    borderRadius: '50%',
    borderWidth: 2,
    borderColor: '#8EEDC7',
  },
  inputForm:{
    width: '80%',
    height: '60%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  doubleInput:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputTxt:{
    backgroundColor: "#EFFCF6",
    borderRadius: 10,
    width: '100%',
    height: 60,
    padding: 15,
    placeholderTextColor: '#829AB1',
  },
  inputTxtDouble:{
    backgroundColor: "#EFFCF6",
    borderRadius: 10,
    width: '45%',
    height: 60,
    padding: 15,
    placeholderTextColor: '#829AB1',
  },
  btnArea:{
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  btnBack:{
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C008C',
    borderTopRightRadius: 30, 
  },
  btnNext:{
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C008C',
    borderTopLeftRadius: 30,
  },
  btnTxt:{
    fontWeight: 700,
    fontSize: 16,
    color: '#F0F4F8', 
    letterSpacing: 2, 
  },


});