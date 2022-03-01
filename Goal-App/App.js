import React, { useState } from 'react'
import { StyleSheet, View, Button,  FlatList } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GotalInput';


export default function App() {
  
  const [goalsList, setGoalsList]= useState([])
const [toggle, setToggle] = useState(false)



function Delete(goalId){
setGoalsList ( currentGoals => {
  return currentGoals.filter((goal) => goal.id !== goalId )
})
setToggle(false)
}

function addGoal(goal){
  setGoalsList(currentGoals => [...currentGoals,
     {id: Math.random(),key: Math.random().toString(), value: goal}
    ])
  console.log(goal)
}
function cancelGoal () {
  setToggle(false)
    }
  

  return (

   <View style={styles.screen}>
     <View style={styles.button}>
     <Button title='Click to add a New Goal' onPress={() => setToggle(true)} />
     </View>
     <GoalInput visible= {toggle} onAddGoal={addGoal} onCancel={cancelGoal}/>
    <FlatList
    keyExtractor={(item, index) => item.id}
     data={goalsList}
      renderItem={itemData => <GoalItem id={itemData.item.id} onDelete = {Delete } title={itemData.item.value} />}
      />
      </View>
)
}


const styles = StyleSheet.create({
  screen:{
    padding:70,
    backgroundColor:'#F8F0E3'
  },
  button:{
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:1
  }


  });


