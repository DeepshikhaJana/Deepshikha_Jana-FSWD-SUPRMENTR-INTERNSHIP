// Home page component that fetches and displays product cards
import React from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';
import { useFetch } from '../hooks/useFetch';

const Home = () => {
  const { data: products, loading, error } = useFetch(fetchProducts);

  if (loading) return <div style={styles.loading}>Loading products...</div>;
  if (error) return <div style={styles.error}>Error: {error}</div>;

  return (
    <div className="home-page" style={styles.container}>
      <h1 style={styles.title}>Welcome to Our Coffee Shop</h1>
      <p style={styles.subtitle}>Hand-picked products just for you.</p>
      
      <div style={styles.productList}>
        {products && products.map((product) => (
          <ProductCard 
            key={product.id} 
            name={product.name} 
            price={product.price} 
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  title: {
    textAlign: 'center',
    color: '#9986ceff',
    marginBottom: '8px'
  },
  subtitle: {
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: '40px'
  },
  productList: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  loading: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '1.2rem'
  },
  error: {
    textAlign: 'center',
    padding: '40px',
    color: '#e74c3c'
  }
};

export default Home;
