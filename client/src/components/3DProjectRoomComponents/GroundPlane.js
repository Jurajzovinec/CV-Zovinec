const GrountPlane = (props) => {
    return ( 
        <mesh receiveShadow rotation={[-Math.PI/2, 0, 0]} position={[0, -0.65, 0]}>      
            <planeBufferGeometry attach="geometry" args={[10, 10]} />      
            <meshStandardMaterial attach="material" color="white" />    
        </mesh>
     );
}
 
export default GrountPlane;