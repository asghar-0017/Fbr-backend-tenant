import { DataTypes } from 'sequelize';

// This will be used as a factory function to create Invoice model for each tenant
export const createInvoiceModel = (sequelize) => {
  return sequelize.define('Invoice', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    invoice_number: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    invoiceType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    invoiceDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sellerNTNCNIC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sellerBusinessName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sellerProvince: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sellerAddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    buyerNTNCNIC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    buyerBusinessName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buyerProvince: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    buyerAddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    buyerRegistrationType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    invoiceRefNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    scenario_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'invoices',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
}; 